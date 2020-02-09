package com.ser515.funmath.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ser515.funmath.model.PublishAssignmentsModel;
import com.ser515.funmath.repositories.PublishAssignmentRepository;

@Service
public class PublishAssignmentService {

	@Autowired
	PublishAssignmentRepository repo;

	public PublishAssignmentsModel publishAssignment(PublishAssignmentsModel assignment) {
		return repo.save(assignment);
	}

}
