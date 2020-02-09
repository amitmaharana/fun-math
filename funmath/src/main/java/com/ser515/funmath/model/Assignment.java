/*
 * package com.ser515.funmath.model;
 * 
 * import java.sql.Date; import java.sql.Timestamp;
 * 
 * import javax.persistence.Column; import javax.persistence.Entity; import
 * javax.persistence.GeneratedValue; import javax.persistence.GenerationType;
 * import javax.persistence.Id;
 * 
 * @Entity(name = "publish_assignments") public class Assignment {
 * 
 * @Id
 * 
 * @GeneratedValue(strategy = GenerationType.IDENTITY) private int assignmentId;
 * 
 * private String assignmentNumber; private int classNumber; private Date
 * dueDate;
 * 
 * @Column(name = "creationDate", insertable=false) private Timestamp
 * creationDate; private String questionList; private int totalPoints;
 * 
 * public Assignment() {
 * 
 * }
 * 
 * public Assignment(int assignmentId, String assignmentNumber, int classNumber,
 * Date dueDate, Timestamp creationDate, String questionList, int totalPoints) {
 * super(); this.assignmentId = assignmentId; this.assignmentNumber =
 * assignmentNumber; this.classNumber = classNumber; this.dueDate = dueDate;
 * this.creationDate = creationDate; this.questionList = questionList;
 * this.totalPoints = totalPoints; }
 * 
 * public int getAssignmentId() { return assignmentId; }
 * 
 * public void setAssignmentId(int assignmentId) { this.assignmentId =
 * assignmentId; }
 * 
 * public String getAssignmentNumber() { return assignmentNumber; }
 * 
 * public void setAssignmentNumber(String assignmentNumber) {
 * this.assignmentNumber = assignmentNumber; }
 * 
 * public int getClassNumber() { return classNumber; }
 * 
 * public void setClassNumber(int classNumber) { this.classNumber = classNumber;
 * }
 * 
 * public Date getDueDate() { return dueDate; }
 * 
 * public void setDueDate(Date dueDate) { this.dueDate = dueDate; }
 * 
 * public Timestamp getCreationDate() { return creationDate; }
 * 
 * public void setCreationDate(Timestamp creationDate) { this.creationDate =
 * creationDate; }
 * 
 * public String getQuestionList() { return questionList; }
 * 
 * public void setQuestionList(String questionList) { this.questionList =
 * questionList; }
 * 
 * public int getTotalPoints() { return totalPoints; }
 * 
 * public void setTotalPoints(int totalPoints) { this.totalPoints = totalPoints;
 * }
 * 
 * }
 */