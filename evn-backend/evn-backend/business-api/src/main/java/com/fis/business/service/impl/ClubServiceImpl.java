package com.fis.business.service.impl;

import com.fis.business.entity.Club;
import com.fis.business.service.ClubService;
import com.fis.fw.common.generics.impl.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class ClubServiceImpl extends GenericServiceImpl<Club, Integer> implements ClubService {
}
