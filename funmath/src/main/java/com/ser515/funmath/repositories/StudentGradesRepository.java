package com.ser515.funmath.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ser515.funmath.model.StudentGrades;

public interface StudentGradesRepository extends JpaRepository<StudentGrades, Integer> {
	List<StudentGrades> findByStudentUserId(int studentID);
}
