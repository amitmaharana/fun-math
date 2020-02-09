package com.ser515.funmath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ser515.funmath.model.QuestionPoolModel;

public interface QuestionPoolRepository extends JpaRepository<QuestionPoolModel, Integer> {
	
	QuestionPoolModel findByClassNumberAndCategory(int classNumber, String category);

}
