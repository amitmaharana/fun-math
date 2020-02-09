package com.ser515.funmath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.ser515.funmath.model.StudentGrades;
import com.ser515.funmath.repositories.StudentGradesRepository;

@Service
public class StudentGradesService {

	@Autowired
	private StudentGradesRepository studentGradesRepository;

	public List<StudentGrades> findGrades(int studentId) {
		if (studentGradesRepository.findByStudentUserId(studentId).isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find user with given id:" + studentId);
		}
		return studentGradesRepository.findByStudentUserId(studentId);
	}

}
