package com.fis.fw.common.generics.impl;

import com.fis.fw.common.generics.ComplexQueryRepository;
import com.fis.fw.common.generics.ComplexQueryService;
import com.fis.fw.common.dto.OrderBy;
import com.fis.fw.common.dto.Paging;

import java.io.Serializable;
import java.util.List;

/**
 * Author: PhucVM
 * Date: 22/10/2019
 */
@SuppressWarnings({"unchecked"})
public abstract class ComplexQueryServiceImpl<E, P extends Serializable> extends GenericServiceImpl<E, P> implements ComplexQueryService<E, P> {

    @Override
    public List<E> findByExample(E e) {
        return ((ComplexQueryRepository<E>) getRepository()).findByExample(e);
    }

    @Override
    public Object queryByExamplePageAndSort(E e, Paging pageInfo, List<OrderBy> orderBys) {
        return ((ComplexQueryRepository<E>) getRepository()).query(e, pageInfo, orderBys);
    }
}
