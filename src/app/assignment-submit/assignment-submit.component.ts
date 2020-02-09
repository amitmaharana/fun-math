import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignmnet-view/assignment.service';
import { Assignment } from '../assignmnet-view/assignment';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router'

@Component({
  selector: 'app-assignment-submit',
  templateUrl: './assignment-submit.component.html',
  styleUrls: ['./assignment-submit.component.scss']
})
export class AssignmentSubmitComponent implements OnInit {
  assignments: Assignment[];
  selectedAssignment: Assignment;
  assignmentNumber = localStorage.getItem("assignmentNumber");
  questionList: any[] = [];
  displayForm = false;
  submittedAnswerList: any[] = [];
  grades: number = 0;
  classNumber: number = 5;
  j: any;

  constructor(private assignmentService: AssignmentService, private snackbar: MatSnackBar, private router:Router) {
    this.displaySpecificAssignment();
  }

  ngOnInit() {

  }

  // getAssignment() {
  //   this.assignmentService.getAssignments(this.classNumber).subscribe((assignments) => { this.assignments = assignments; this.displaySpecificAssignment(9) });
  // }
  displaySpecificAssignment() {
    // for (let i in this.assignments) {
    //   if (assignmentId == this.assignments[i].assignmentId) {
    //     this.selectedAssignment = this.assignments[i];
    //     break;
    //   }
    // }
    this.questionList = JSON.parse(localStorage.getItem("questionList"));
    // console.log(this.questionList);
    this.displayForm = true;

  }
  submitAssignment(form: NgForm) {
    this.grades = 0;
    this.submittedAnswerList = form.value;
    console.log(this.submittedAnswerList);
    for (let key in this.submittedAnswerList) {
      for (let i in this.questionList) {
        if (key == this.questionList[i].ID) {
          let submittedValue = this.submittedAnswerList[key];
          console.log(this.questionList[i].correctAnswer);
          console.log(submittedValue);
          if (submittedValue == this.questionList[i].correctAnswer) {
            this.grades += 10;
          }

        }
      }
    }
    console.log(this.grades);
    this.snackbar.open('You scored ' + this.grades + ' out of '+ localStorage.getItem("totalPoints"), 'Dismiss', {
      duration: 2000
    });
    let requestBody = {
      "studentEmail": localStorage.getItem("emailId"),
      "assignmentNumber": localStorage.getItem("assignmentNumber"),
      "classNumber": +localStorage.getItem("classNumber"),
      "pointsScored": this.grades,
      "totalPoints":+localStorage.getItem("totalPoints")
    };
    console.log(requestBody);
    this.assignmentService.submitAssignment(requestBody).subscribe((value)=>(console.log(value)));
    
    setTimeout(()=>{
      console.log("Inside navigateToDash");
      this.router.navigateByUrl('studentdash', { skipLocationChange: true });
    }, 2500);
  }
}
