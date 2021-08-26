package com.fis.business.repo;

import com.fis.business.entity.Player;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepo extends JpaRepository<Player, Integer> {

    List<Player> findByClub_cId(Integer cid, Pageable page);

    Long countAllByClub_cId (Integer cid);

    List<Player> findAllBypNameOrNation(String pName, String nation, Pageable page);

}
