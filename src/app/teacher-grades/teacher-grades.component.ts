import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher-grades',
  templateUrl: './teacher-grades.component.html',
  styleUrls: ['./teacher-grades.component.scss']
})
export class TeacherGradesComponent implements OnInit {

  url = 'https://funmath-backend.appspot.com/submittedassignments/search';
  displayedColumns: string[] = ['submissionid', 'assignmentnumber', 'studentid', 'class', 'marks', 'total'];
  dataSource;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
        .subscribe(
          res => {
              this.dataSource = res
          },
          err => {
            console.log("Error")
          }
        );
  }

}
