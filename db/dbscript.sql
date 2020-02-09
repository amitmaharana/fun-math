DROP TABLE roles;
DROP TABLE users;
CREATE TABLE users
(
	user_id NUMBER NOT NULL PRIMARY KEY,
	first_name VARCHAR2(40),
	last_name VARCHAR2(40),
	email_id VARCHAR2(40) UNIQUE,
    gender VARCHAR2(40),
	password VARCHAR2(200),
    dob Date
);

ALTER TABLE users ADD (
  CONSTRAINT email_id_uq UNIQUE (email_id)
);

DROP SEQUENCE user_id_seq;
CREATE SEQUENCE user_id_seq START WITH 1000;

CREATE OR REPLACE TRIGGER user_bir 
BEFORE INSERT ON users 
FOR EACH ROW

BEGIN
  SELECT user_id_seq.NEXTVAL
  INTO   :new.user_id
  FROM   dual;
END;
/

CREATE TABLE roles
(
	user_id NUMBER,
	user_role VARCHAR2(40) DEFAULT 'STUDENT',
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


INSERT INTO users (first_name,last_name,email_id,password) VALUES ('sharad','dhar','sharaddhar@yahoo.com','abcd','male',TO_DATE('2019-10-09','YYYY-DD-MM'));
INSERT INTO users (first_name,last_name,email_id,password) VALUES ('sharad','dhar','sdhar@gmail.com','abcd','male',TO_DATE('2019-10-09','YYYY-DD-MM'));

INSERT INTO roles (user_id) VALUES (1000);

