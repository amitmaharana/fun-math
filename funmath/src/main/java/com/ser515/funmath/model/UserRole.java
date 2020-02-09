package com.ser515.funmath.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author asmig
 *
 */
@Entity
@Table(name = "user_role")
public class UserRole {

	@Id
	private int roleId;
	private String roleName;

	public UserRole() {
		super();
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public UserRole(int roleId, String roleName) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
	}

}
