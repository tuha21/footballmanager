package com.fis.fw.common.generics;

import com.fis.fw.common.dto.OrderBy;
import com.fis.fw.common.dto.Paging;

import java.util.List;

/**
 * Author: PhucVM
 * Date: 22/10/2019
 */
public interface ComplexQueryRepository<T> {

    List<T> findByExample(T example);

    Object query(T example, Paging pageInfo, List<OrderBy> lstOrder);
}
