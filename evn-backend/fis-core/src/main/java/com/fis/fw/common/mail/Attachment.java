package com.fis.fw.common.mail;

/**
 * com.fis.fw.common.mail.Attachment
 * TungHuynh
 * Created by sondt18@fpt.com.vn
 * Date 30/11/2019 11:30 AM
 */
public class Attachment {
    private String fileName;
    private String base64;

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getBase64() {
        return base64;
    }

    public void setBase64(String base64) {
        this.base64 = base64;
    }
}
