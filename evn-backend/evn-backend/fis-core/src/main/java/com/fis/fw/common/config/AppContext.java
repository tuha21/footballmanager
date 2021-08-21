package com.fis.fw.common.config;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * Author: PhucVM
 * Date: 19/06/2020
 */
@Component
public class AppContext implements ApplicationContextAware {

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        if (ApplicationContextProvider.getApplicationContext() == null) {
            ApplicationContextProvider.setApplicationContext(applicationContext);
        }
    }
}
