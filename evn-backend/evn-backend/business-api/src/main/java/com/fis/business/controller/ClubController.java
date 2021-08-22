package com.fis.business.controller;

import com.fis.business.entity.Club;
import com.fis.fw.common.generics.controller.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin/club")
public class ClubController extends GenericController<Club, Integer> {


}
