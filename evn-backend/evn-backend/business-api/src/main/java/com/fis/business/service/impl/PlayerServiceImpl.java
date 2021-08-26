package com.fis.business.service.impl;

import com.fis.business.dao.PlayerDao;
import com.fis.business.entity.Player;
import com.fis.business.service.PlayerService;
import com.fis.fw.common.dto.OrderBy;
import com.fis.fw.common.generics.impl.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerServiceImpl extends GenericServiceImpl<Player, Integer> implements PlayerService {

    @Autowired
    PlayerDao playerDao;

    @Override
    public List<Player> findByClub_cId(Integer id, Integer page, Integer size, OrderBy orderBy) {
        return this.playerDao.findByClub_CId(id, page, size, orderBy);
    }

    @Override
    public Long countPlayer() {
        return this.playerDao.countPlayer();
    }

    @Override
    public Long countByClub_cid(Integer cid) {
        return this.playerDao.countAllByClub_cid(cid);
    }

    @Override
    public List<Player> findAllByPNameOrNation(String pName, String nation, Pageable page) {
        return this.playerDao.findAllByPNameOrNation(pName, nation, page);
    }
}
