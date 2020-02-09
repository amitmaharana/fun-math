DROP TABLE IF EXISTS funmath_expression_tab;
DROP TABLE IF EXISTS student_grades;
DROP TABLE IF EXISTS assignment;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS user_role;
DROP TABLE IF EXISTS user_requests;

CREATE TABLE `funmath_project`.`user_role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(45) NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_id_UNIQUE` (`role_id`),
  UNIQUE KEY `role_name_UNIQUE` (`role_name`)
)COMMENT = 'This table stores user roles like student, teacher, or administrator';


INSERT INTO user_role(role_id,role_name) VALUES(100,'STUDENT');
INSERT INTO user_role(role_id,role_name) VALUES(101,'ADMIN');
INSERT INTO user_role(role_id,role_name) VALUES(102,'TEACHER');

CREATE TABLE `funmath_project`.`users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `email_id` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role_id` int(11) DEFAULT '100',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `email_id_UNIQUE` (`email_id`),
  KEY `role_id_fk_idx` (`role_id`),
  CONSTRAINT `role_id_fk` FOREIGN KEY (`role_id`) REFERENCES `user_role` (`role_id`)
) COMMENT = 'used to store user info';

INSERT INTO users (first_name,last_name,email_id,password,gender,dob) VALUES ('sharad','dhar','sharaddhar@yahoo.com','abcd','male','2019-10-09');

CREATE TABLE `funmath_project`.`assignment` (
	`assignment_id` INT NOT NULL AUTO_INCREMENT,
	`assignment_name` VARCHAR(100) NOT NULL,
	`due_date` DATE NOT NULL,
	PRIMARY KEY (`assignment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO funmath_project.assignment (assignment_name, due_date) values("Addition", '2019-10-31');
INSERT INTO funmath_project.assignment (assignment_name, due_date) values("Subtraction", '2019-09-10');
INSERT INTO funmath_project.assignment (assignment_name, due_date) values("Multiplication", '2019-11-01');
INSERT INTO funmath_project.assignment (assignment_name, due_date) values("Integration", '2019-11-01');

CREATE TABLE `funmath_project`.`student_grades` (
	`grade_id` INT NOT NULL AUTO_INCREMENT,
	`ass_id` INT NOT NULL,
	`assignment_number` VARCHAR(45) NULL,
	`student_user_id` INT NOT NULL,
	`points` INT,
	`total_points` INT NOT NULL,
	`comments` VARCHAR(200),
	PRIMARY KEY (`grade_id`),
    	CONSTRAINT `student_user_id`
		FOREIGN KEY (`student_user_id`)
		REFERENCES `funmath_project`.`users` (`user_id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION,
	CONSTRAINT `ass_id`
		FOREIGN KEY (`ass_id`)
		REFERENCES `funmath_project`.`publish_assignments` (`assignment_id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO user_role(role_id,role_name) VALUES(100,'STUDENT');
INSERT INTO user_role(role_id,role_name) VALUES(101,'ADMIN');
INSERT INTO user_role(role_id,role_name) VALUES(102,'TEACHER');

''' Query for creating expression table  '''

CREATE TABLE `student_expressions` (
  `expression_id` int(11) NOT NULL AUTO_INCREMENT,
  `expression_val` varchar(1000) NOT NULL,
  `user_id` int(11) NOT NULL,
  `result` int(11) DEFAULT NULL,
  PRIMARY KEY (`expression_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
)
 ''' Table for storing published assignments'''
CREATE TABLE `published_assignments` (
  `assignment_id` int(11) NOT NULL AUTO_INCREMENT,
  `assignment_number` int(11) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `class_number` int(11) DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `creation_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `total_points` int(11) DEFAULT NULL,
  PRIMARY KEY (`assignment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



)
''' table for storing user requests'''
CREATE TABLE `funmath_project`.`user_requests` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email_id` VARCHAR(100) NOT NULL,
  `request_date` VARCHAR(50) NOT NULL,
  `request_status` VARCHAR(45) NOT NULL DEFAULT 'Pending',
  PRIMARY KEY (`id`));


INSERT INTO funmath_project.student_grades (ass_id, assignment_number, student_user_id, points, total_points, comments) values (2, 'assignment_2', 1, 100, 100, 'Excellent!');



"""
question_pool
"""

CREATE TABLE `funmath_project`.`question_pool` (
  `question_id` INT NOT NULL AUTO_INCREMENT,
  `question_number` INT NOT NULL,
  `class_number` INT NOT NULL,
  `question_category` VARCHAR(45) NULL,
  `display_type` VARCHAR(45) NULL,
  `display_entity` VARCHAR(45) NULL,
  `question_description` VARCHAR(45) NULL,
  `question_extradetails` VARCHAR(45) NULL,
  `answer_type` VARCHAR(45) NULL,
  `answer_choice` VARCHAR(45) NULL,
  `answer_description` VARCHAR(45) NULL,
  `answer_extradetails` VARCHAR(45) NULL,
  `correct_answer` VARCHAR(45) NULL,
  `correct_answer_type` VARCHAR(45) NULL,
  PRIMARY KEY (`question_id`))
COMMENT = 'Collection of questions for assignment';


"""
keep this for publish assignment
"""
CREATE TABLE `funmath_project`.`publish_assignments` (
  `assignment_id` INT NOT NULL AUTO_INCREMENT,
  `assignment_number` VARCHAR(45) NULL,
  `class_number` INT NULL,
  `due_date` DATE NULL,
  `creation_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `question_list` LONGTEXT NULL,
  `total_points` INT NULL,
  PRIMARY KEY (`assignment_id`));
"""Updated question_pool table as question_repo """
CREATE TABLE `question_repo` (
  `question_id` int(11) NOT NULL AUTO_INCREMENT,
  `class_number` int(11) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `question_list` longtext,
  PRIMARY KEY (`question_id`)
)
"""Submitted assignment"""
CREATE TABLE `submitted_assignments` (
  `submission_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_email` varchar(45) DEFAULT NULL,
  `assignment_number` varchar(45) DEFAULT NULL,
  `class_number` int(11) DEFAULT NULL,
  `points_scored` int(11) DEFAULT NULL,
  `total_points` int(11) DEFAULT NULL,
  PRIMARY KEY (`submission_id`)
)


