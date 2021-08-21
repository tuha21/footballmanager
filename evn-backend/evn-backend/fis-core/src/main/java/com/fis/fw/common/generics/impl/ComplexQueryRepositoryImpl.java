package com.fis.fw.common.generics.impl;

import com.fis.fw.common.generics.ComplexQueryRepository;
import com.fis.fw.common.dto.OrderBy;
import com.fis.fw.common.dto.Paging;
import com.fis.fw.common.utils.DataUtil;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

/**
 * Author: PhucVM
 * Date: 22/10/2019
 */
@SuppressWarnings({"unchecked"})
public abstract class ComplexQueryRepositoryImpl<T> implements ComplexQueryRepository<T> {

    private final Class<T> genericClass;

    public ComplexQueryRepositoryImpl(Class<T> genericClass) {
        this.genericClass = genericClass;
    }

    @Override
    public List<T> findByExample(T example) {
        EntityManager em = getEntityManager();
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery cq = cb.createQuery(genericClass);

        Root<T> rootEntity = cq.from(genericClass);

        Predicate[] predicateArr = getWhereCondition(cb, rootEntity, example);
        cq.where(predicateArr);

        TypedQuery typedQuery = em.createQuery(cq);

        return typedQuery.getResultList();
    }

    @Override
    public Object query(T example, Paging pageInfo, List<OrderBy> lstOrder) {
        EntityManager em = getEntityManager();
        CriteriaBuilder cb = em.getCriteriaBuilder();

        CriteriaQuery cq = cb.createQuery(genericClass);
        Root<T> rootEntity = cq.from(genericClass);
        String alias = genericClass.getSimpleName();
        rootEntity.alias(alias);

        Predicate[] predicateArr = getWhereCondition(cb, rootEntity, example);
        cq.where(predicateArr);
        cq.orderBy(DataUtil.buildOrderList(cb, rootEntity, lstOrder));

        TypedQuery typedQuery = em.createQuery(cq);
        if (pageInfo != null) {
            // paging
            typedQuery.setFirstResult(pageInfo.getIndex() * pageInfo.getSize());
            typedQuery.setMaxResults(pageInfo.getSize());

            // count total row
            CriteriaQuery<Long> cqCount = cb.createQuery(Long.class);
            Root<T> rootCount = cqCount.from(cq.getResultType());
            rootCount.alias(alias);
            cqCount.select(cb.count(rootCount));
            cqCount.where(predicateArr);
            Long count = em.createQuery(cqCount).getSingleResult();

            return new PageImpl<T>(typedQuery.getResultList(), PageRequest.of(pageInfo.getIndex(), pageInfo.getSize()), count);
        }

        return typedQuery.getResultList();
    }

    protected abstract Predicate[] getWhereCondition(CriteriaBuilder cb, Root<T> rootEntity, T example);

    protected abstract EntityManager getEntityManager();
}
