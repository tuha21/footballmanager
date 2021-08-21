//package com.fis.business.module.employee;
//
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//
//import java.util.List;
//
//@ExtendWith(SpringExtension.class)
//@SpringBootTest
//class EmployeeRepositoryTest {
//    @Autowired
//    EmployeeRepository employeeRepository;
//
//    @Test
//    void findEmployeeByOrg() {
//        List<Employee> employees = employeeRepository.findEmployeeByOrg(1);
//        employees.stream().forEach(System.out::println);
//    }
//}