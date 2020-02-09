import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  url = 'https://funmath-backend.appspot.com/user/login/';

  constructor(private router: Router, private formBuilder: FormBuilder, public authService: AuthService,
    private snackBar: MatSnackBar, private http: HttpClient) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  goRegister() {
    this.router.navigateByUrl('register', { skipLocationChange: true });
  }

  login() {
    if (this.loginForm.invalid) {
      this.snackBar.open('Invalid Details!', 'Dismiss', {
        duration: 1000,
      });
      return;
    } else {
      const obj = {
        'username': this.loginForm.controls['email'].value,
        'password': this.loginForm.controls['password'].value
      };
      this.http.post(this.url, obj)
        .subscribe(
          res => {
            this.snackBar.open('Login Successful!', 'Dismiss', {
              duration: 1000,
            });
            localStorage.setItem('isLoggedIn', "true");
            localStorage.setItem('token', res['firstName']);
            localStorage.setItem('userId', res['userId'])
            localStorage.setItem('emailId', res['emailId'])

            const today = new Date().toISOString().substring(0, 4)
            const dob = res['dob'] != null ? res['dob'].substring(0, 4) : today
            localStorage.setItem('age', String(Number(today) - Number(dob)))
            if (Number(localStorage.getItem('age')) < 11) {
              localStorage.setItem('classNum', '1');
            } else {
              localStorage.setItem('classNum', '5');
            }

            if (res['roleId'] === 100) { localStorage.setItem('userType', 'Student'); }
            if (res['roleId'] === 101) { localStorage.setItem('userType', 'Admin'); }
            if (res['roleId'] === 102) { localStorage.setItem('userType', 'Teacher'); }
            window.location.reload();
          },
          err => {
            this.snackBar.open('Invalid Details!', 'Dismiss', {
              duration: 1000,
            });
          }

        );
    }
  }
}
