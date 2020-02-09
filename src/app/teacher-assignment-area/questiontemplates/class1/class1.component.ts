import { Component, OnInit, Input } from "@angular/core";
import { TeacherAssignmentAreaComponent } from "src/app/teacher-assignment-area/teacher-assignment-area.component";

@Component({
  selector: "app-class1",
  templateUrl: "./class1.component.html",
  styleUrls: ["./class1.component.scss"]
})
export class Class1Component implements OnInit {
  public test: string;
  startDate = new Date();
  @Input() classSelected: string;
  constructor() {}

  ngOnInit() {}
  display() {
    console.log("hello" + this.classSelected);
  }

  createAssignment() {
    alert("Assignment Created");
  }
}
