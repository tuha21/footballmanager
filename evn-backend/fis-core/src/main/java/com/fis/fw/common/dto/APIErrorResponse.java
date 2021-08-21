package com.fis.fw.common.dto;

import com.fis.fw.common.config.ErrorCode;
import com.fis.fw.common.exceptions.AppException;

/**
 * Author: PhucVM
 * Date: 21/10/2019
 */
public class APIErrorResponse extends APIResponse {

    public APIErrorResponse() {
        super();
    }

    public APIErrorResponse(String code) {
        super();
        setCode(code);
        setMessage(code);
    }

    public APIErrorResponse forException(Exception exception) {
        if(exception==null) {
            setCode(ErrorCode.SYSTEM_ERROR);
            setMessage("Unkown error. Exception is null");
            return this;
        }
        if(exception instanceof AppException) {
            setCode(((AppException)exception).getCode());
            setMessage(exception.getMessage());
            return this;
        }
        setCode(ErrorCode.SYSTEM_ERROR);
        setMessage(exception.getMessage());
        return this;
    }
}
