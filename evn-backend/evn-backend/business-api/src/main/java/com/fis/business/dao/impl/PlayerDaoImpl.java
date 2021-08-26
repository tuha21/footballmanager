package com.fis.business.dao.impl;

import com.fis.business.dao.PlayerDao;
import com.fis.business.entity.Player;
import com.fis.business.repo.PlayerRepo;
import com.fis.fw.common.dto.OrderBy;
import com.fis.fw.common.generics.impl.GenericDaoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PlayerDaoImpl extends GenericDaoImpl<Player, Integer> implements PlayerDao {

    @Autowired
    PlayerRepo playerRepo;

    @Override
    public List<Player> findByClub_CId(Integer id, Integer page, Integer size, OrderBy orderBy) {
        Pageable firstPageWithTwoElements = PageRequest.of(page, size, Sort.by(orderBy.getDirection().equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC, orderBy.getProperty()));
        return this.playerRepo.findByClub_cId(id, firstPageWithTwoElements);
    }

    @Override
    public long countPlayer() {
        return this.playerRepo.count();
    }

    @Override
    public long countAllByClub_cid(Integer cid) {
        return this.playerRepo.countAllByClub_cId(cid);
    }

    @Override
    public List<Player> findAllByPNameOrNation(String pName, String nation, Pageable page) {
        return this.playerRepo.findAllBypNameOrNation(pName, nation, page);
    }
}
