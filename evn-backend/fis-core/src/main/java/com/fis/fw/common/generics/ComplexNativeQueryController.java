package com.fis.fw.common.generics;

import com.fis.fw.common.dto.OrderBy;
import com.fis.fw.common.dto.QueryRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;

/**
 * Author: PhucVM
 * Date: 22/10/2019
 */
public interface ComplexNativeQueryController<T> {

    ResponseEntity<Object> getAll(@RequestBody List<OrderBy> orders);

    ResponseEntity<Object> findByExample(@RequestBody T example);

    ResponseEntity<Object> query(@RequestBody QueryRequest<T> queryRequest);

    ResponseEntity<Object> create(@Valid @RequestBody T example);

    ResponseEntity<Object> update(@Valid @RequestBody T example);

    ResponseEntity<Object> delete(@PathVariable String id);

    ResponseEntity<Object> findById(@PathVariable String id);
}
