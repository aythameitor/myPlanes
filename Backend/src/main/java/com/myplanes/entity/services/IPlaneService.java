package com.myplanes.entity.services;

import java.util.List;

import com.myplanes.entity.models.Plane;

public interface IPlaneService {
	public Plane get(long id);
	public List<Plane> getAll();
	public void post(Plane plane);
	public void put(Plane plane, long id);
	public void delete(long id);
}
