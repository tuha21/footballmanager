package com.fis.business.module.shift;

import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import static org.junit.jupiter.api.Assertions.*;

class ShiftDefServiceTest {

    @Test
    void genShiftByTime() {
        ShiftDefService shiftDefService = new ShiftDefService();
        ShiftCycle shift = shiftDefService.genShiftByTime(LocalDateTime.of(LocalDate.now(), LocalTime.of(23, 28)));
        assertEquals(shift.getSfod(), 1);

        shift = shiftDefService.genShiftByTime(LocalDateTime.of(LocalDate.now(), LocalTime.of(8, 0)));
        assertEquals(shift.getSfod(), 2);

        shift = shiftDefService.genShiftByTime(LocalDateTime.of(LocalDate.now(), LocalTime.of(8, 15)));
        assertEquals(shift.getSfod(), 2);

        shift = shiftDefService.genShiftByTime(LocalDateTime.of(LocalDate.now(), LocalTime.of(15, 0)));
        assertEquals(shift.getSfod(), 3);

        shift = shiftDefService.genShiftByTime(LocalDateTime.of(LocalDate.now(), LocalTime.of(18, 0)));
        assertEquals(shift.getSfod(), 3);

        shift = shiftDefService.genShiftByTime(LocalDateTime.of(LocalDate.now(), LocalTime.of(22, 0)));
        assertEquals(shift.getSfod(), 1);

        shift = shiftDefService.genShiftByTime(LocalDateTime.of(LocalDate.now(), LocalTime.of(3, 0)));
        assertEquals(shift.getSfod(), 1);
    }
}