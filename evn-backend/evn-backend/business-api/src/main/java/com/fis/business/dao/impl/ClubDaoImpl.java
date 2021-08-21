package com.fis.business.dao.impl;

import com.fis.business.dao.ClubDao;
import com.fis.business.entity.Club;
import com.fis.fw.common.generics.impl.GenericDaoImpl;
import org.springframework.stereotype.Component;

@Component
public class ClubDaoImpl extends GenericDaoImpl<Club, Integer> implements ClubDao {
}
