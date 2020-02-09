import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// export interface GradedAssignments {
//   name: string;
//   position: number;
//   marks: number;
//   total: number;
//   comments: string;
// }

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.scss']
})
export class StudentGradesComponent implements OnInit {

  url = 'https://funmath-backend.appspot.com/submittedassignments/search/';
  displayedColumns: string[] = ['submissionid', 'name', 'marks', 'total'];
  dataSource;
  gradeSize : boolean;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url+localStorage.getItem('emailId'))
        .subscribe(
          res => {
              console.log(res)
              if (res != null) {
                this.gradeSize = true;
              } else {
                this.gradeSize = false;
              }
              this.dataSource = res
          },
          err => {
            console.log("Error")
          }
        );
  }
}