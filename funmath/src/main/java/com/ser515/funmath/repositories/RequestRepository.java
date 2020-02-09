package com.ser515.funmath.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ser515.funmath.model.AccessRequest;


public interface RequestRepository  extends JpaRepository<AccessRequest, Integer> { 
	
	List<AccessRequest> findAllByRequestStatus(String requestStatus);	
}
