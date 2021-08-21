package com.fis.business.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "APP_PARAM", schema = "ADMIN_DTHGD")
public class AppParam {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "APP_PARAM_ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "APP_PARAM_SEQ")
    @SequenceGenerator(sequenceName = "APP_PARAM_SEQ", name = "APP_PARAM_SEQ", allocationSize = 1)

    private Integer appParamId;
    @Column(name = "CODE")
    private String code;
    @Column(name = "TYPE")
    private String type;
    @Column(name = "VALUE")
    private String value;
    @Column(name = "STATUS")
    private String status;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "CREATE_TIME")
    private Date createTime;
    @Column(name = "UPDATE_TIME")
    private Date updateTime;

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public void setAppParamId(Integer appParamId) {
        this.appParamId = appParamId;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getAppParamId() {
        return appParamId;
    }

    public String getCode() {
        return code;
    }

    public String getType() {
        return type;
    }

    public String getValue() {
        return value;
    }

    public String getStatus() {
        return status;
    }

    public String getDescription() {
        return description;
    }
}
