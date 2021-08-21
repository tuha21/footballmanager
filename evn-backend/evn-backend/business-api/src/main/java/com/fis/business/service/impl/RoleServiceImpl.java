package com.fis.business.service.impl;

import com.fis.business.entity.Role;
import com.fis.business.service.RoleService;
import com.fis.fw.common.generics.impl.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl extends GenericServiceImpl<Role, Integer> implements RoleService {
}
