import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MatDialog, MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  createRequestUrl = 'https://funmath-backend.appspot.com/user/request/modifyStatus';

  constructor(private router: Router, public dialog: MatDialog, private http: HttpClient, private snackBar: MatSnackBar) { }

  breakpoint: number;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 4;
  }

  openDialog() {
    const dialogRef = this.dialog.open(PrivilegeRequestDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        const obj = {
          emailId: localStorage.getItem('emailId'),
          requestDate: new Date().toISOString().substring(0, 10),
          requestStatus: 'pending'
        };
        console.log(obj);
        this.http.post(this.createRequestUrl, obj).subscribe(
          res => {
            this.snackBar.open("Request Submitted!", "Dismiss", {
              duration: 1000
            });
          },
          err => {
            this.snackBar.open("Error in Sending Request!", "Dismiss", {
              duration: 1000
            });
          }
        );
      }
      console.log(result)
      // "emailId": "test@asu.edu",
      // "requestDate": "2000-05-11",
      // "requestStatus": "pending"
    });
  }
  //Not working need to take a look again.
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 2 : 4;
  }

  viewGrades(): void {
    this.router.navigateByUrl('studentgradesdash', { skipLocationChange: true });
  }

  viewAssignment(): void {
    this.router.navigateByUrl('assignmentview', { skipLocationChange: true });
  }

  viewHistory(): void {
    this.router.navigateByUrl('history', { skipLocationChange: true });
  }

  launchCanvas(): void {
    if (localStorage.getItem('classNum') === '1') {
      this.router.navigateByUrl('studentfirstgrade', { skipLocationChange: true });
    }
    else {
      this.router.navigateByUrl('canvas', { skipLocationChange: true });
    }
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}

@Component({
  selector: 'privilege-request-dialog',
  templateUrl: 'privilege-request-dialog.html',
})
export class PrivilegeRequestDialog { }
