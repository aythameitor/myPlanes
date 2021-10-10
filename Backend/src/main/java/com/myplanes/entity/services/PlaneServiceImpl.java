package com.myplanes.entity.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.myplanes.entity.dao.IPlaneDao;
import com.myplanes.entity.models.Plane;

@Service
public class PlaneServiceImpl implements IPlaneService{
	
	@Autowired
	private IPlaneDao planeDao;
	
	@Override
	public Plane get(long id) {
		return planeDao.findById(id).get();
	}

	@Override
	public List<Plane> getAll() {
		return (List<Plane>) planeDao.findAll();
	}

	@Override
	public void post(Plane plane) {
		planeDao.save(plane);
		
	}

	@Override
	public void put(Plane plane, long id) {
		planeDao.findById(id).ifPresent((x)->{
			plane.setId(id);
			planeDao.save(plane);
		});
		
	}

	@Override
	public void delete(long id) {
		planeDao.deleteById(id);
		
	}

}
