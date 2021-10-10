package com.myplanes.entity.dao;
import org.springframework.data.repository.CrudRepository;
import com.myplanes.entity.models.Plane;

public interface IPlaneDao extends CrudRepository<Plane, Long>{
	
}
