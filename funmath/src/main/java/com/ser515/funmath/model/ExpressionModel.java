package com.ser515.funmath.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student_expression")
public class ExpressionModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int expressionId;
	private String expressionVal;
	private int userId;
	private int result;

	public ExpressionModel(int expressionId, String expressionVal, int userId, int result) {
		super();
		this.expressionId = expressionId;
		this.expressionVal = expressionVal;
		this.userId = userId;
		this.result = result;
	}

	public int getExpressionId() {
		return expressionId;
	}

	public void setExpressionId(int expressionId) {
		this.expressionId = expressionId;
	}

	public String getExpressionVal() {
		return expressionVal;
	}

	public void setExpressionVal(String expression) {
		this.expressionVal = expression;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getResult() {
		return result;
	}

	public void setResult(int result) {
		this.result = result;
	}

}
