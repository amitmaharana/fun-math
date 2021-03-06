package com.ser515.funmath.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ser515.funmath.model.SubmittedAssignments;

public interface SubmittedAssignmentsRepository extends JpaRepository<SubmittedAssignments, Integer> {
	List<SubmittedAssignments> findByStudentEmail(String studentEmail);
}