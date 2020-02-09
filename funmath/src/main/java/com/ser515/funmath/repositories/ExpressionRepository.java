package com.ser515.funmath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ser515.funmath.model.ExpressionModel;

@Repository
public interface ExpressionRepository extends JpaRepository<ExpressionModel, Integer> {

}
