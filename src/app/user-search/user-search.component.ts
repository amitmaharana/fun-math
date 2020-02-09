import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';
import { Location } from '@angular/common';
import { Users } from '../mock-users';
import { Router } from "@angular/router";

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  Users: User[];
  selectedUsers: number[] = [];
  UsersSize: boolean = false;

  constructor(private usersService: UsersService, private location: Location, private router: Router, private snackbar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(
        users => {
          this.Users = users;
          if (this.Users.length > 0) {
            this.UsersSize = true;
          } else {
            this.UsersSize = false;
          }
          console.log(this.UsersSize);
        }
      );
  }

  delete(user: User): void {
    //if (confirm("Are you sure, Do you want to delete the user ?")){
    const dialogRef = this.dialog.open(ConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result == true) {
        this.usersService.deleteUser(user.userId)
          .subscribe(val => {
            console.log(val)
            //need to update once real api is ready
            val = true;
            if (val) {
              this.Users = this.Users.filter(u => u.userId !== user.userId);
              this.snackbar.open('User Deleted Successfully.', 'Dismiss', {
                duration: 3000
              });
            } else {
              this.snackbar.open('Something went wrong.', 'Dismiss', {
                duration: 3000
              });
            }
          })

        // this.usersService.getUsers()
        // .subscribe(
        //   users => 
        //   {
        //     this.Users = users;
        //     if (this.Users.length > 0) {
        //       this.UsersSize = true;
        //     }else{
        //       this.UsersSize = false;
        //     }
        //     console.log(this.UsersSize);
        //   }
        // );
      }
    });
  }

  search(nameOrId: string): void {
    if (nameOrId == ""){
      this.getUsers();
    }else{
      this.usersService.getUsersByNameOrId(nameOrId)
      .subscribe(
        users => {
          this.Users = users;
          if (this.Users.length > 0) {
            this.UsersSize = true;
          } else {
            this.UsersSize = false;
          }
        }
      );

    }
    
    console.log(this.UsersSize);
    this.selectedUsers = [];
  }

  updateCheck(userid: number): void {
    if (this.selectedUsers.indexOf(userid) >= 0) {
      this.selectedUsers.splice(this.selectedUsers.indexOf(userid), 1);
    } else {
      this.selectedUsers.push(userid);
    }
    console.log(this.selectedUsers);
  }

  deleteSelected(): void {
    if (this.selectedUsers.length == 0) {
      this.snackbar.open('Please select atleast one user.', 'Dismiss', {
        duration: 3000
      });
      return;
    }
    const dialogRef = this.dialog.open(ConfirmDeleteDialog);
    //if (confirm("Do you want to delete the users ?")){
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result == true) {
        var returnMessage = this.selectedUsers.length + " out of " + this.selectedUsers.length + " deleted succesfully."
        this.usersService.deleteUsers(this.selectedUsers)
          .subscribe(val => {
            console.log(val)
            if (val){
              this.snackbar.open(returnMessage, 'Dismiss', {
                duration: 3000
              });
            }
            
          });
        this.Users = this.Users.filter(u => (this.selectedUsers.indexOf(u.userId) < 0));
        
        // this.usersService.getUsers()
        // .subscribe(
        //   users => 
        //   {
        //     this.Users = users;
        //     if (this.Users.length > 0) {
        //       this.UsersSize = true;
        //     }else{
        //       this.UsersSize = false;
        //     }
        //     console.log(this.UsersSize);
        //   }
        // );
        this.selectedUsers = [];
      }
    });

  }

  goBack(): void {
    this.router.navigateByUrl('/admindash', { skipLocationChange: true });

  }

  goTo(id: number): void {
    this.router.navigateByUrl('/userdetails/' + id, { skipLocationChange: true });
  }

}
@Component({
  selector: 'confirm-delete-dialog',
  templateUrl: 'confirm-delete-dialog.html',
})
export class ConfirmDeleteDialog {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialog>) { }

  onNoClick(): boolean {
    this.dialogRef.close();
    return false;
  }

  onYesClick(): boolean {
    this.dialogRef.close();
    return true;
  }

}