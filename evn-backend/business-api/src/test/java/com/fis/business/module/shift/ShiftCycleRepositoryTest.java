package com.fis.business.module.shift;

import lombok.var;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class ShiftCycleRepositoryTest {

    @Autowired
    ShiftCycleRepository shiftCycleRepository;

    @Test
    void testInsert(){
        ShiftCycle s = new ShiftCycle();
        s.setShiftId(shiftCycleRepository.genShiftCycleId());
        s.setCode("20201125-01)");
        s.setShiftDate(LocalDate.now());
        s.setSfod(2);
        s.setFromTime(8);
        s.setToTime(12);
        s.setOwnedByOrg(1);
        s.setStatus("1");
        s.setFromDatetime(new Date());
        s.setToDatetime(new Date());
        s.setGenerateTime(new Date());
        var res = shiftCycleRepository.insertShipCycle(s);
        if(res)
            System.out.println("Thanh cong");
    }

    @Test
    void testQueryShiftCycle(){
        ShiftCycle shiftCycle = shiftCycleRepository.lastShiftCycle(1);
        System.out.println(shiftCycle.getShiftDate());
    }


    @Test
    void summaryReport() {
        Map<String, Object> params = new HashMap<>();
        params.put("shift_id", 98);
        params.put("giver", 1);

        shiftCycleRepository.summaryReport(params);

        System.out.println(params.get("error"));
    }

}
