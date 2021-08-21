package com.fis.business.integrate;

import com.fis.fw.common.integrate.BaseEntityRequestParam;
import com.fis.fw.common.integrate.SoapApiBase;
import com.fis.business.config.Constants;

public class SampleSoapApi extends SoapApiBase {
    private static volatile SampleSoapApi instance = null;

    public static SampleSoapApi getInstance() throws Exception {
        if (instance == null) {
            synchronized (SampleSoapApi.class) {
                if (instance == null) {
                    instance = new SampleSoapApi();
                }
            }
        }
        return instance;
    }

    @Override
    protected String getApiPartnerCode() {
        return Constants.API_CODE.SAMPLE_API;
    }

    @Override
    protected String buildXmlString(BaseEntityRequestParam requestParam) {
        StringBuilder xmlString = new StringBuilder();
        xmlString.append("<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:obj=\"http://com.fis.sample/\">");
        xmlString.append("   <soapenv:Header/>");
        xmlString.append("   <soapenv:Body>");
        xmlString.append("       <obj:sampleReq>");
        xmlString.append("               <arg0></arg0>");
        xmlString.append("               <arg1></arg1>");
        xmlString.append("     </obj:sampleReq>");
        xmlString.append("   <soapenv:Body>");
        xmlString.append("</soapenv:Envelope>\n");
        return xmlString.toString();
    }


    /*
    Các hàm nghiệp vụ ở đây
     */
}
