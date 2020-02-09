package com.ser515.funmath.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ser515.funmath.model.QuestionPoolModel;
import com.ser515.funmath.repositories.QuestionPoolRepository;

@Service
public class QuestionService {
	@Autowired
	QuestionPoolRepository repository;
	
	
	public void addQuestions(QuestionPoolModel questionList) {
		repository.save(questionList);		
	}
	public List<QuestionPoolModel> getAllQuestions() {
		return repository.findAll();	
		
	}
	public QuestionPoolModel getQuestionByClassAndCategory(int classNumber,String category) {
		return repository.findByClassNumberAndCategory(classNumber, category);
		
	}
	

}
