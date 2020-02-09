import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Assignment } from './assignment';
import { AssignmentService } from './assignment.service';
import { Router } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-assignmnet-view',
  templateUrl: './assignmnet-view.component.html',
  styleUrls: ['./assignmnet-view.component.scss']
})
export class AssignmnetViewComponent implements OnInit {

  Assignments: Assignment[];
  assignmentsSize: boolean;
  breakpoint: boolean;
  displayedColumns: string[] = ['ID', 'Name', 'Due Date', 'Points'];
  displayedColumns1: string[] = ['ID', 'Name', 'Due Date', 'Points', 'star'];

  constructor(private assignmentService: AssignmentService, private router: Router) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? true : false;
    this.getAssignments();
  }

  goToAssignment(assignment : Assignment): void{
    console.log("assignment" + assignment);
    localStorage.setItem('assignmentId', String(assignment["assignmentId"]));
    localStorage.setItem('assignmentNumber', assignment.assignmentNumber);
    localStorage.setItem('dueDate', assignment.dueDate.toString());
    localStorage.setItem('questionList', assignment.questionList);
    localStorage.setItem('totalPoints', String(assignment.totalPoints));
    localStorage.setItem('classNumber', assignment.classNumber.toString());
    console.log(localStorage.getItem('assignmentId'));
    console.log(localStorage.getItem('assignmentNumber'));
    console.log(localStorage.getItem('dueDate'));
    console.log(localStorage.getItem('questionList'));
    console.log(localStorage.getItem('totalPoints'));
    console.log(localStorage.getItem('classNumber'));
    this.router.navigateByUrl('/assignmentSubmit', { skipLocationChange: true });
  }

  getAssignments(): void {
    var classNum = (Number)(localStorage.getItem('classNum'));
    console.log(classNum);
    this.assignmentService.getAssignments(classNum)
      .subscribe(
        assignments => {
          this.Assignments = assignments;
          console.log(this.Assignments);
          if (this.Assignments.length > 0) {
            this.assignmentsSize = true;
          } else {
            this.assignmentsSize = false;
          }
          console.log(this.assignmentsSize);
        }
      );
  }
}
