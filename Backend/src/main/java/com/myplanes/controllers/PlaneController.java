package com.myplanes.controllers;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.myplanes.entity.models.Plane;
import com.myplanes.entity.services.IPlaneService;

@CrossOrigin(origins = "*")
@RestController

public class PlaneController{
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedOrigins("*").allowedMethods("GET", "POST", "PUT", "DELETE");
			}
		};
	}
	@Autowired
	IPlaneService planeService;
	@GetMapping("/planes")
	public List<Plane> getAllPlanes(){
		return planeService.getAll();
		
	}

	@GetMapping("/plane/{id}")
	public Plane getOne(@PathVariable(value = "id") long id) {
		return planeService.get(id);
	}

	@RequestMapping(value = "/plane", method = {RequestMethod.POST})
	public void add(Plane plane) {
		planeService.post(plane);
	}

	@RequestMapping(value = "/plane/{id}", method = {RequestMethod.PUT})
	public void update(Plane plane, @PathVariable(value = "id") long id) {
		planeService.put(plane, id);
	}

	@DeleteMapping(value = "/plane/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		planeService.delete(id);
	}

	
}
