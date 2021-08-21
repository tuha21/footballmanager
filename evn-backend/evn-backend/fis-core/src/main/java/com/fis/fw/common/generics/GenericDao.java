package com.fis.fw.common.generics;
/**
 * com.fis.fw.common.generics.GenericDao
 * TungHuynh
 * Created by sondt18@fpt.com.vn
 * Date 11/05/2019 9:47 AM
 */

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public interface GenericDao<T, ID extends Serializable> {
    List<T> getByCondition(Map map);

}
