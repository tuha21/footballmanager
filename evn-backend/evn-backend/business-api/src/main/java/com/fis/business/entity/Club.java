package com.fis.business.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "CLUBS")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CID")
    private Integer cId;

    @Column(name = "CNAME")
    private String cName;

    @Column(name = "STD")
    private String std;

    @Column(name = "LOC")
    private String loc;

    @Column(name = "MGR")
    private String mgr;

    @Column(name = "FDER")
    private String fDer;

    @Column(name = "FDED")
    private Date fDed;

    @Column(name = "LOGO")
    private String logo;

    @OneToMany(mappedBy = "club", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Player> players;

}
