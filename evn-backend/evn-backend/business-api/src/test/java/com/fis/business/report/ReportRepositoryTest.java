//package com.fis.business.report;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fis.business.report.model.LdShiftRpItem;
//import lombok.extern.slf4j.Slf4j;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.util.List;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@Slf4j
//public class ReportRepositoryTest {
//
//    @Autowired
//    ReportRepository reportRepository;
//
//    @Test
//    public void test_getListShiftRpItemByShiftId() throws JsonProcessingException {
//        List<LdShiftRpItem> ldShiftRpItemList = reportRepository.getListShiftRpItemByShiftId(6l);
//        for(LdShiftRpItem l : ldShiftRpItemList){
//            log.info(l.toString());
//        }
//    }
//}
