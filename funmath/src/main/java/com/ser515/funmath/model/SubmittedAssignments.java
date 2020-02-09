package com.ser515.funmath.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "submitted_assignments")
public class SubmittedAssignments {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int submissionId;
	private String studentEmail;
	private String assignmentNumber;
	private int classNumber;
	private int pointsScored;
	private int totalPoints;

	public SubmittedAssignments() {

	}

	public SubmittedAssignments(int submissionId, String studentEmail, String assignmentNumber, int classNumber,
			int pointsScored, int totalPoints) {
		super();
		this.submissionId = submissionId;
		this.studentEmail = studentEmail;
		this.assignmentNumber = assignmentNumber;
		this.classNumber = classNumber;
		this.pointsScored = pointsScored;
		this.totalPoints = totalPoints;
	}

	public int getSubmissionId() {
		return submissionId;
	}

	public void setSubmissionId(int submissionId) {
		this.submissionId = submissionId;
	}

	public String getStudentEmail() {
		return studentEmail;
	}

	public void setStudentEmail(String studentEmail) {
		this.studentEmail = studentEmail;
	}

	public String getAssignmentNumber() {
		return assignmentNumber;
	}

	public void setAssignmentNumber(String assignmentNumber) {
		this.assignmentNumber = assignmentNumber;
	}

	public int getClassNumber() {
		return classNumber;
	}

	public void setClassNumber(int classNumber) {
		this.classNumber = classNumber;
	}

	public int getPointsScored() {
		return pointsScored;
	}

	public void setPointsScored(int pointsScored) {
		this.pointsScored = pointsScored;
	}

	public int getTotalPoints() {
		return totalPoints;
	}

	public void setTotalPoints(int totalPoints) {
		this.totalPoints = totalPoints;
	}
	
}
