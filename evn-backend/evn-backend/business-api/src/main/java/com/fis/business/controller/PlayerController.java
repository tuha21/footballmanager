package com.fis.business.controller;

import com.fis.business.dto.MessagesResponse;
import com.fis.business.entity.Player;
import com.fis.business.repo.PlayerRepo;
import com.fis.business.service.PlayerService;
import com.fis.fw.common.dto.OrderBy;
import com.fis.fw.common.generics.controller.GenericController;
import com.fis.fw.common.utils.LogUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/player")
@CrossOrigin(origins = "http://localhost:3000")
public class PlayerController extends GenericController<Player, Integer> {

    @Autowired
    PlayerService playerService;

//    @GetMapping("/test")
//    public Player test () {
//        return this.playerRepo.findById(5).get();
//    }

    @PostMapping("/findByClubId/{id}")
    public ResponseEntity<Object> findByClubId(@PathVariable Integer id, @RequestParam Integer page, @RequestParam Integer size, @RequestBody OrderBy orderBy) {
        long startTime = System.currentTimeMillis();
        LogUtil.showLog(this.logger, LogUtil.LOG_BEGIN, "findByClubId", startTime);
        MessagesResponse mss = new MessagesResponse();
        try {
            mss.setData(playerService.findByClub_cId(id, page, size, orderBy));
        }
        catch (Exception ex) {
            logger.error(ex.getMessage(), ex);
            throw ex;
        }
        finally {
            LogUtil.showLog(logger, LogUtil.LOG_END, "findByClubId", startTime);
        }
        return new ResponseEntity<>(mss, HttpStatus.OK);
    }

    @GetMapping("/countAll")
    public ResponseEntity<Long> countAll() {
        return new ResponseEntity<Long>(this.playerService.countPlayer(), HttpStatus.OK);
    }

    @GetMapping("/countByClub/{id}")
    public ResponseEntity<Long> countByClub(@PathVariable("id") Integer cid) {
//        return new ResponseEntity<>("Hello", HttpStatus.OK);
        return new ResponseEntity<Long>(this.playerService.countByClub_cid(cid), HttpStatus.OK);
    }


    @PostMapping("/findByPNameAndNation")
    public ResponseEntity<Object> findAllByPNameOrNation(@RequestParam String pName,@RequestParam String nation,@RequestParam Integer page, @RequestParam Integer size, @RequestBody OrderBy orderBy){
        long startTime = System.currentTimeMillis();
        LogUtil.showLog(this.logger, LogUtil.LOG_BEGIN, "findByClubId", startTime);
        MessagesResponse mss = new MessagesResponse();
        try {
            Pageable availablePage = PageRequest.of(page, size, Sort.by(orderBy.getDirection().equalsIgnoreCase("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC, orderBy.getProperty()));
            mss.setData(playerService.findAllByPNameOrNation(pName, nation, availablePage));
        }
        catch (Exception ex) {
            logger.error(ex.getMessage(), ex);
            throw ex;
        }
        finally {
            LogUtil.showLog(logger, LogUtil.LOG_END, "findByClubId", startTime);
        }
        return new ResponseEntity<>(mss, HttpStatus.OK);
    }
}
