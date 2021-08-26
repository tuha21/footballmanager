package com.fis.business.service;

import com.fis.business.entity.Player;
import com.fis.fw.common.dto.OrderBy;
import com.fis.fw.common.generics.GenericService;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PlayerService extends GenericService<Player, Integer> {

    public List<Player> findByClub_cId(Integer id, Integer page, Integer size, OrderBy orderBy);

    public Long countPlayer();

    public Long countByClub_cid(Integer cid);

    List<Player> findAllByPNameOrNation(String pName, String nation, Pageable page);
}
