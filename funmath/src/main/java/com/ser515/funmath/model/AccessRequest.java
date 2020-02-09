package com.ser515.funmath.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="user_requests")
public class AccessRequest {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String emailId;
	private String requestDate;
	private String requestStatus;
	
	
	
	
	public AccessRequest() {
		
	}
	
	public AccessRequest(int id, String emailId, String requestDate, String requestStatus) {
		super();
		this.id = id;
		this.emailId = emailId;
		this.requestDate = requestDate;
		this.requestStatus = requestStatus;
	}
	public int getId() {
		return id;
	}
	public void setId(int requestId) {
		this.id = requestId;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getRequestDate() {
		return requestDate;
	}
	public void setRequestDate(String requestDate) {
		this.requestDate = requestDate;
	}
	public String getRequestStatus() {
		return requestStatus;
	}
	public void setRequestStatus(String requestStatus) {
		this.requestStatus = requestStatus;
	}
	
	
	

}
