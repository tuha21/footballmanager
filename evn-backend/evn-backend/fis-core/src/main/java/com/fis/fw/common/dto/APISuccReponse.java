package com.fis.fw.common.dto;

import com.fis.fw.common.config.ErrorCode;

/**
 * Author: PhucVM
 * Date: 21/10/2019
 */
public class APISuccReponse extends APIResponse {

    public APISuccReponse() {
        setCode(ErrorCode.SUCCESS);
    }
}
