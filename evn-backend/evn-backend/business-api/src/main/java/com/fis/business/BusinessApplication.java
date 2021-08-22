package com.fis.business;

import com.fis.business.entity.Account;
import com.fis.business.repo.AccountRepo;
import com.fis.fw.common.config.CommonConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableAsync
@SpringBootApplication
@ComponentScan({"com.fis.*"})
@EnableJpaRepositories("com.fis.*")
@EntityScan("com.fis.*")
@Import(CommonConfig.class)
public class BusinessApplication implements CommandLineRunner {
    public static void main(String[] args) {
        SpringApplication.run(BusinessApplication.class, args);
    }

    @Autowired
    AccountRepo accountRepo;
    @Autowired
    PasswordEncoder passwordEncoder;

//    @Autowired
//    GuaranteeScheduleService service;
    @Override
    public void run(String... args) throws Exception {
//        var obj = service.getGuaranteeSchedule("1");
//        System.out.println("so luongL "+obj.size());
    }
}
