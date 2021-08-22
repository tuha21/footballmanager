package com.fis.business.controller;

import com.fis.business.entity.Account;
import com.fis.fw.common.generics.controller.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin//account")
public class AccountController extends GenericController<Account, Integer> {
}
