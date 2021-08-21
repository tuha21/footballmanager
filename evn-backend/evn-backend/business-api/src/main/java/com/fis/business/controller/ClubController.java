package com.fis.business.controller;

import com.fis.business.entity.Club;
import com.fis.business.repo.ClubRepo;
import com.fis.fw.common.generics.controller.GenericController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/club")
public class ClubController extends GenericController<Club, Integer> {


}
