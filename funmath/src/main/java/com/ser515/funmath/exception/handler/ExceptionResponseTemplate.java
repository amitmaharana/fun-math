package com.ser515.funmath.exception.handler;

import org.springframework.http.HttpStatus;

public class ExceptionResponseTemplate {

	private String errorMessage;
	private HttpStatus status;

	public ExceptionResponseTemplate() {
	}

	public ExceptionResponseTemplate(String errorMessage, HttpStatus status) {
		super();
		this.errorMessage = errorMessage;
		this.status = status;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public HttpStatus getStatus() {
		return status;
	}

	public void setStatus(HttpStatus status) {
		this.status = status;
	}

}
