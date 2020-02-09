package com.ser515.funmath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ser515.funmath.model.PublishAssignmentsModel;

public interface PublishAssignmentRepository extends JpaRepository<PublishAssignmentsModel, Integer> {

}
