package com.fis.business.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {
    @RequestMapping("/greet")
    public String greet() {
        return "Good morning Leo Messi";
    }
}
