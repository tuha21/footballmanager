package com.fis.business.repo;

import com.fis.business.dao.AppParamDao;
import com.fis.business.entity.AppParam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppParamRepo extends JpaRepository<AppParam, Integer>, AppParamDao {
}
