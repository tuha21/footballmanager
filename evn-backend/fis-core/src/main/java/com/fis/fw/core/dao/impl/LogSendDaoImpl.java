package com.fis.fw.core.dao.impl;import com.fis.fw.core.dao.LogSendDao;import org.springframework.stereotype.Repository;import com.fis.fw.common.generics.impl.GenericDaoImpl;import com.fis.fw.core.entity.LogSend;import java.sql.Connection;import java.sql.PreparedStatement;import java.sql.Timestamp;import java.util.List;/** * com.fis.fw.core.dao.impl.LogSendDaoImpl * TungHuynh * Created by sondt18@fpt.com.vn * Date 24/06/2019 9:47 AM */public class LogSendDaoImpl extends GenericDaoImpl<LogSend, Integer> implements LogSendDao {    @Override    public List<LogSend> save(List<LogSend> lst) throws Exception {        try (Connection conn = dataSource.getConnection()) {            conn.setAutoCommit(false);            PreparedStatement psmt = conn.prepareStatement(                    "INSERT INTO ADMIN_DTHGD.LOG_SEND(LOG_SEND_ID, " +                            " METHOD, API_PARTNER_ID, REQUEST_HEADER, REQUEST_BODY, " +                            " RESPONSE_STATUS, RESPONSE_BODY, PROCESS_TIME, " +                            " CREATE_TIME, URL, RETRY) " +                            " VALUES (ADMIN_DTHGD.LOG_SEND_SEQ.nextval, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");            int count = 0;            for (LogSend item : lst) {                psmt.setObject(1, item.getMethod());                psmt.setObject(2, item.getApiPartnerId());                psmt.setObject(3, item.getRequestHeader());                psmt.setObject(4, item.getRequestBody());                psmt.setObject(5, item.getResponseStatus());                psmt.setObject(6, item.getResponseBody());                psmt.setObject(7, item.getProcessTime());                psmt.setObject(8, new Timestamp(item.getCreateTime().getTime()));                psmt.setObject(9, item.getUrl());                psmt.setObject(10, item.getRetry());                psmt.execute();                count++;                if (count % 100 == 0) {                    conn.commit();                }            }            conn.commit();        } catch (Exception ex) {            throw ex;        }        return lst;    }}