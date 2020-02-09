package com.ser515.funmath.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ser515.funmath.model.SubmittedAssignments;
import com.ser515.funmath.services.SubmitAssignmentService;

@RestController
@RequestMapping("/submittedassignments")
public class SubmittedAssignmentsController {

	@Autowired
	SubmitAssignmentService submitAssignmentService;

	@GetMapping("/search/{emailId}")
	public List<SubmittedAssignments> findGradesByEmail(@PathVariable String emailId) {
		return submitAssignmentService.findGrades(emailId);
	}

	@GetMapping("/search")
	public List<SubmittedAssignments> findAllGrades() {
		return submitAssignmentService.findAllGrades();
	}
}
