package com.fis.business.module.shift;

import org.junit.jupiter.api.Test;

import java.time.LocalTime;

import static org.junit.jupiter.api.Assertions.*;

class ShiftDefTest {

    @Test
    void isInShift() {
        ShiftDef shiftDef = new ShiftDef(1,"Ca 1", 8, 15);
        assertTrue(shiftDef.isInShift(LocalTime.of(8, 30)));
        assertTrue(shiftDef.isInShift(LocalTime.of(8, 0)));
        assertFalse(shiftDef.isInShift(LocalTime.of(15, 0)));
    }

    @Test
    void isInShift3() {
        ShiftDef shiftDef = new ShiftDef(3,"Ca 3", 22, 8);
        assertTrue(shiftDef.isInShift(LocalTime.of(22, 0)));
        assertTrue(shiftDef.isInShift(LocalTime.of(3, 0)));
        assertFalse(shiftDef.isInShift(LocalTime.of(8, 0)));
        assertFalse(shiftDef.isInShift(LocalTime.of(15, 0)));
    }
}