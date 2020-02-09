package com.ser515.funmath.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ser515.funmath.model.StudentGrades;
import com.ser515.funmath.services.StudentGradesService;

@RestController
@RequestMapping("/studentgrades")
public class StudentGradesController {

	@Autowired
	StudentGradesService studentGradesService;

	@GetMapping("/search/{id}")
	public List<StudentGrades> findGradesByID(@PathVariable Integer id) {
		return studentGradesService.findGrades(id);
	}

}
