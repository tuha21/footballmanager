package com.fis.business.service.impl;

import com.fis.business.entity.Player;
import com.fis.business.service.PlayerService;
import com.fis.fw.common.generics.impl.GenericServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class PlayerServiceImpl extends GenericServiceImpl<Player, Integer> implements PlayerService {
}
