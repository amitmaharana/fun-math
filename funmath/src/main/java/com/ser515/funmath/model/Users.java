package com.ser515.funmath.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int userId;

	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_name")
	private String lastName;
	@Column(name = "email_id")
	private String emailId;
	@Column(name = "gender")
	private String gender;
	@Column(name = "password")
	private String password;
	@Column(name = "dob")
	private String dob;

	private int roleId = 100;

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public Users() {

	}

	public Users(int userId, String firstName, String lastName, String emailId, String gender, String password,
			String dob, int roleId) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.gender = gender;
		this.password = password;
		this.dob = dob;
		this.roleId = roleId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	@Override
	public String toString() {
		final StringBuilder sbObject = new StringBuilder("User{");
		sbObject.append("userId=").append(userId);
		sbObject.append(", firstName='").append(firstName).append('\'');
		sbObject.append(", lastName='").append(lastName).append('\'');
		sbObject.append(", email='").append(emailId).append('\'');
		sbObject.append(", dob='").append(dob).append('\'');
		sbObject.append(", gender='").append(gender).append('\'');
		sbObject.append('}');
		// added this in
		return sbObject.toString();
	}
}
