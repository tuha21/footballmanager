package com.fis.fw.common.generics;
/**
 * com.fis.fw.common.generics.GenericService
 * TungHuynh
 * Created by sondt18@fpt.com.vn
 * Date 11/05/2019 9:47 AM
 */

import com.fis.fw.common.dto.OrderBy;
import com.fis.fw.common.dto.Paging;
import com.fis.fw.common.dto.QueryRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface GenericService<T, ID> {

    T findById(ID id);

    List<T> findAll(List<ID> ids);

    T save(T obj);

    List<T> save(List<T> lst) throws Exception;

    void delete(ID key);

    void delete(List<T> lst);

    void deleteAll();

    boolean existsById(ID key);

    List<T> queryAllAndSort(List<OrderBy> orderBys);

    List<T> findByExample(T e);

    List<T> findLimit(int numberSkip, int limit);

    Page<T> findPage(int numberSkip, int limit, List<OrderBy> orderBys);

    Object query(QueryRequest<T> request);

    Object queryByExamplePageAndSort(T e, Paging pageInfo, List<OrderBy> orderBys);

    List<T> findAll();

    List<T> getByCondition(Map map);
}
