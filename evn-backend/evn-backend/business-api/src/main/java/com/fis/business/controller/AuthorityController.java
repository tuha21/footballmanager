package com.fis.business.controller;

import com.fis.business.entity.Authority;
import com.fis.fw.common.generics.controller.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("authority")
public class AuthorityController extends GenericController<Authority, Integer> {
}
