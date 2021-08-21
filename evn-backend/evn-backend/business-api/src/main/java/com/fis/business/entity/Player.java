package com.fis.business.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "PLAYERS")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PID")
    private Integer pId;

    @Column(name = "PNAME")
    private String pName;

    @Column(name = "NATION")
    private String nation;

    @Column(name = "BORN")
    private Date born;

    @Column(name = "RATE")
    private Integer rate;

    @Column(name = "SAL")
    private Integer sal;

    @Column(name = "PNUM")
    private Integer pNum;

    @Column(name = "AVT")
    private String avt;

    @ManyToOne
    @JoinColumn(name = "CID")
    private Club club;

}
