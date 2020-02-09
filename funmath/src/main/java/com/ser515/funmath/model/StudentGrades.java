package com.ser515.funmath.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student_grades")
public class StudentGrades {

	@Id
	@Column(name = "grade_id")
	private int gradeId;
	
	@Column(name = "assignment_number")
	private String assignmentNumber;
	
	@Column(name = "student_user_id")
	private int studentUserId;

	@Column(name = "ass_id")
	private int assignmentId;

	@Column(name = "points")
	private int points;

	@Column(name = "total_points")
	private int totalPoints;

	@Column(name = "comments")
	private String comments;

	public int getAssignmentId() {
		return assignmentId;
	}

	public void setAssignmentId(int assignmentId) {
		this.assignmentId = assignmentId;
	}

	public int getStudentUserId() {
		return studentUserId;
	}

	public void setStudentUserId(int studentUserId) {
		this.studentUserId = studentUserId;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}
	
	public int getGradeId() {
		return gradeId;
	}

	public void setGradeId(int gradeId) {
		this.gradeId = gradeId;
	}

	public String getAssignmentNumber() {
		return assignmentNumber;
	}

	public void setAssignmentNumber(String assignmentNumber) {
		this.assignmentNumber = assignmentNumber;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	public int getTotalPoints() {
		return totalPoints;
	}

	public void setTotalPoints(int totalPoints) {
		this.totalPoints = totalPoints;
	}

}
