package com.fis.business.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "authorities")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Authority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "AUID")
    private Integer auId;

    @ManyToOne
    @JoinColumn(name = "AID")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "RID")
    private Role role;

}
