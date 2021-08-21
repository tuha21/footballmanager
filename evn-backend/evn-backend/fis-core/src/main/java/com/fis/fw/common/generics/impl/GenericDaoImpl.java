package com.fis.fw.common.generics.impl;

import com.fis.fw.common.generics.GenericDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import javax.sql.DataSource;
import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * com.fis.fw.common.generics.impl.GenericDaoImpl
 * TungHuynh
 * Created by sondt18@fpt.com.vn
 * Date 11/05/2019 9:47 AM
 */
@SuppressWarnings("unchecked")
public class GenericDaoImpl<T, ID extends Serializable> implements GenericDao<T, ID> {
    @Autowired
    protected NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Autowired
    protected JdbcTemplate jdbcTemplate;

    @Autowired
    protected DataSource dataSource;

    public List<T> getByCondition(Map map) {
        return null;
    }

    public List<T> getByCondition(Map map, String sql, Class mappedClass) {
        return namedParameterJdbcTemplate.query(sql, map, new BeanPropertyRowMapper(mappedClass));
    }

}
