package com.fis.fw.common.mail;

import com.fis.fw.common.thread.ThreadManager;

import java.util.ArrayList;

/**
 * com.fis.fw.common.mail.MailManager
 * TungHuynh
 * Created by sondt18@fpt.com.vn
 * Date 18/06/2019 2:04 PM
 */
public class MailManager extends ThreadManager {
    @Override
    public String getName() {
        return "MailManager";
    }

    @Override
    public void doProcess(ArrayList items) {
        MailThread thread = new MailThread();
        thread.setItems(items);
        executorService.submit(thread);
    }
}
