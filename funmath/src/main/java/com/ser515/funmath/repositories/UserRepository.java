package com.ser515.funmath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ser515.funmath.model.Users;

public interface UserRepository extends JpaRepository<Users, Integer> {
	Users findByEmailId(String emailID);	
}
