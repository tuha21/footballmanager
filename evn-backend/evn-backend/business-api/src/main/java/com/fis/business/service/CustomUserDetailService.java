package com.fis.business.service;

import com.fis.business.dto.CustomUserDetail;
import com.fis.business.entity.Account;
import com.fis.business.repo.AccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    AccountRepo accountRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = this.accountRepo.findByUsername(username);
        if(account == null) {
            throw  new UsernameNotFoundException(username);
        }
        return new CustomUserDetail(account);
    }
}
