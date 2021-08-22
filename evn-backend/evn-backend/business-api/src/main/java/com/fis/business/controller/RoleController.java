package com.fis.business.controller;

import com.fis.business.entity.Role;
import com.fis.fw.common.generics.controller.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin//role")
public class RoleController extends GenericController<Role, Integer> {
}
