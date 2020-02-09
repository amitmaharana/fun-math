package com.ser515.funmath.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "question_repo")
public class QuestionPoolModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int questionId;
	private int classNumber;
	private String category;
	private String questionList;
	
	public QuestionPoolModel() {
		
	}
	public QuestionPoolModel(int questionId, int classNumber, String category, String questionList) {
		super();
		this.questionId = questionId;
		this.classNumber = classNumber;
		this.category = category;
		this.questionList = questionList;
	}
	public int getQuestionId() {
		return questionId;
	}
	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}
	public int getClassNumber() {
		return classNumber;
	}
	public void setClassNumber(int classNumber) {
		this.classNumber = classNumber;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getQuestionList() {
		return questionList;
	}
	public void setQuestionList(String questionList) {
		this.questionList = questionList;
	}
	
	
	
	
	
	
	
	


}