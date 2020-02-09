import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { stringToKeyValue } from "@angular/flex-layout/extended/typings/style/style-transforms";
import { TeacherService } from "./teacher.service";
import { QuestionModel } from "./question-model";

@Component({
  selector: "app-teacher-assignment-area",
  templateUrl: "./teacher-assignment-area.component.html",
  styleUrls: ["./teacher-assignment-area.component.scss"]
})
export class TeacherAssignmentAreaComponent implements OnInit {
  public linkClicked: string;

  questionObject: QuestionModel;
  jsonArr: any[] = [];
  constructor(private router: Router, private teacherService: TeacherService) {
    this.getAllQuestions();
  }
  //checkClass = 'isClass1s1';

  ngOnInit() {
    
  }

  // public displayclass1s1() {
  //   localStorage.setItem("isClass1", "S1");
  //   window.location.reload();
  // }

  // public displayclass1s2() {
  //   localStorage.setItem("isClass1", "S2");
  //   window.location.reload();
  // }

  getAllQuestions(): void {
    this.teacherService
      .getQuestionByClassCategory(5, "Addition and Subtraction")
      .subscribe(question => {this.questionObject = question;
        this.fetchData();
    this.linkClicked = 'c1s1';});
  }
  fetchData() {
    console.log(JSON.parse(this.questionObject.questionList));
  }
}
