package com.fis.business.integrate;

import com.fis.fw.common.integrate.RestApiBase;
import com.fis.business.config.Constants;

public class SampleRestApi extends RestApiBase {
    private static volatile SampleRestApi instance = null;

    public static SampleRestApi getInstance() throws Exception {
        if (instance == null) {
            synchronized (SampleRestApi.class) {
                if (instance == null) {
                    instance = new SampleRestApi();
                }
            }
        }
        return instance;
    }

    @Override
    protected String getApiPartnerCode() {
        return Constants.API_CODE.SAMPLE_API;
    }

    /*
    Các hàm nghiệp vụ ở đây
     */
}
