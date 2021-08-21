//package com.fis.business.module.shift;
//
//import lombok.var;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//
//import java.util.Date;
//
//@ExtendWith(SpringExtension.class)
//@SpringBootTest
//class ShiftParticipantRepoTest {
//
//    @Autowired
//    ShiftParticipantRepository shiftParticipantRepository;
//
//    @Test
//    void testInsert(){
//        ShiftParticipant s = new ShiftParticipant();
//
//        s.setParticipantId(shiftParticipantRepository.genShiftParticipantId());
//        s.setEmpId(1);
//        s.setShiftId(1);
//        s.setRole("DDVPT");
//        s.setStatus("1");
//        s.setParticipateTime(new Date());
//        s.setStt(0);
//
//        var res = shiftParticipantRepository.insertShipParticipant(s);
//        if(res)
//            System.out.println("Them moi thanh cong");
//
//    }
//}
