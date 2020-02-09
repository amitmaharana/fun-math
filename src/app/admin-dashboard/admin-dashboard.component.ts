import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Router } from "@angular/router"
import { HttpClient } from '@angular/common/http';

export interface DialogData {
  dataList: [];
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  pendingTaskUrl = 'https://funmath-backend.appspot.com/user/request/getAll/pending';
  updateRoleUrl = 'https://funmath-backend.appspot.com/user/request/modifyStatus';

  dataList = [];

  constructor(public dialog: MatDialog, private router: Router, private http: HttpClient, private snackBar: MatSnackBar) { }

  approve(): void {
    this.http.get(this.pendingTaskUrl)
      .subscribe(
        res => {
          for (let i = 0; i < Object.keys(res).length; i++) {
            this.dataList.push({ id: res[i]['id'], emailId: res[i]['emailId'], date: res[i]['requestDate'] })
          }
        },
        err => {
          this.snackBar.open('Request timeout!', 'Dismiss', {
            duration: 1000,
          });
        }
      );
    const dialogRef = this.dialog.open(AdminApprovalDialog, {
      data: { dataList: this.dataList }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataList = [];
      result = result.split(' ');
      const obj = {
        id: result[0],
        emailId: result[1],
        requestDate: result[2],
        requestStatus: result[3]
      };
      console.log(obj)
      this.http.post(this.updateRoleUrl, obj).subscribe(
        res => {
          this.snackBar.open("Processed Successfully!", "Dismiss", {
            duration: 1000
          });
        },
        err => {
          this.snackBar.open("Error in Approval/Rejection!", "Dismiss", {
            duration: 1000
          });
        }
      );
    });
  }

  view(): void {
    this.router.navigateByUrl('usersearch', { skipLocationChange: true });
  }

}

@Component({
  selector: 'admin-approval-dialog',
  templateUrl: 'admin-approval-dialog.html',
})
export class AdminApprovalDialog {

  constructor(
    public dialogRef: MatDialogRef<AdminApprovalDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}