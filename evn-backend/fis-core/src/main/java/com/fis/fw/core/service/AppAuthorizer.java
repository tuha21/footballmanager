package com.fis.fw.core.service;

import org.springframework.security.core.Authentication;

public interface AppAuthorizer {
	boolean authorize(Authentication authentication, String action, Object callerObj);

}
