package com.fis.fw.core.dao;import com.fis.fw.common.generics.GenericDao;import com.fis.fw.core.entity.LogAction;import java.util.List;public interface LogActionDao extends GenericDao<LogAction,Integer> {    List<LogAction> save(List<LogAction> lst) throws Exception;}