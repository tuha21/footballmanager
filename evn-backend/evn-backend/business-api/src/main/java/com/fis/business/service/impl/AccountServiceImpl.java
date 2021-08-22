package com.fis.business.service.impl;

import com.fis.business.entity.Account;
import com.fis.business.service.AccountService;
import com.fis.fw.common.generics.impl.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl extends GenericServiceImpl<Account, Integer> implements AccountService {
}
