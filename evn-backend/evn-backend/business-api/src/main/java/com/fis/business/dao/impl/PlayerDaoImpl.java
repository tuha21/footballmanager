package com.fis.business.dao.impl;

import com.fis.business.dao.PlayerDao;
import com.fis.business.entity.Player;
import com.fis.fw.common.generics.impl.GenericDaoImpl;
import org.springframework.stereotype.Component;

@Component
public class PlayerDaoImpl extends GenericDaoImpl<Player, Integer> implements PlayerDao {
}
