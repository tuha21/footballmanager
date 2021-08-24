package com.fis.business.controller;

import com.fis.business.entity.Player;
import com.fis.business.repo.PlayerRepo;
import com.fis.fw.common.generics.controller.GenericController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin/player")
@CrossOrigin(origins = "http://localhost:3000")
public class PlayerController extends GenericController<Player, Integer> {

    @Autowired
    PlayerRepo playerRepo;

    @GetMapping("/test")
    public Player test () {
        return this.playerRepo.findById(5).get();
    }

}
