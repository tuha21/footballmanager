package com.fis.fw.common.filter;

import com.fis.fw.common.security.TokenJwtHelper;
import com.fis.fw.common.security.UserAuthenticationToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static java.util.Collections.emptyList;

//import com.fis.identity.service.AdminUserService;

/**
 * Author: PhucVM
 * Date: 03/12/2019
 */
@Component
public class JwtRequestFilter extends OncePerRequestFilter {

//    @Autowired
//    private AdminUserService adminUserService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = TokenJwtHelper.getInstance().getJwt(request);
        if (token != null){// && jwtProvider.isValidToken(token, false)) {
//            Long userId = jwtProvider.getUserIdFromJwtToken(token);
//
//            // TODO: should get cache user
//            UserDetails userDetails = adminUserService.loadUserByUserId(userId);
//
//            if (userDetails != null) {
//                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                SecurityContextHolder.getContext().setAuthentication(authentication);
//            }
            String userName = TokenJwtHelper.getInstance().getSubjectToken(token);
            Authentication authentication = new UserAuthenticationToken(userName, null, emptyList());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
//        else { // DEV mode, bypass validate token
//            Authentication authentication = new UserAuthenticationToken("anonymousDevUser", null, emptyList());
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//        }

        filterChain.doFilter(request, response);
    }

}
