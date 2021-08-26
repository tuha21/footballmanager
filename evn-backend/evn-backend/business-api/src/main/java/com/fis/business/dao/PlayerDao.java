package com.fis.business.dao;

import com.fis.business.entity.Player;
import com.fis.fw.common.dto.OrderBy;
import com.fis.fw.common.generics.GenericDao;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PlayerDao extends GenericDao<Player, Integer> {

    public List<Player> findByClub_CId(Integer id, Integer page, Integer size, OrderBy orderBy);

    public long countPlayer();

    public long countAllByClub_cid(Integer cid);

    List<Player> findAllByPNameOrNation(String pName, String nation, Pageable page);
}
