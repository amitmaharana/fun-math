package com.ser515.funmath.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ser515.funmath.model.PublishAssignmentsModel;

public interface AssignmentRepository extends JpaRepository<PublishAssignmentsModel,Integer> {
	
	List<PublishAssignmentsModel> findAllByClassNumber(int classNumber);

}
