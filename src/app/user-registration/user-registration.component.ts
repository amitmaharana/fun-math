import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.scss"]
})
export class UserRegistrationComponent implements OnInit {
  url = "https://funmath-backend.appspot.com/user/register";

  startDate = new Date(2010, 0, 1);
  minDate = new Date(1919, 0, 1);
  maxDate = new Date();

  fname = new FormControl("", Validators.required);
  lname = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.email,
    Validators.minLength(6)
  ]);
  password = new FormControl("", [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(32)
  ]);
  gender = new FormControl();
  date = new FormControl();

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() { }

  register() {
    if (
      this.fname.invalid ||
      this.lname.invalid ||
      this.email.invalid ||
      this.password.invalid
    ) {
      this.snackBar.open("Invalid Details!", "Dismiss", {
        duration: 1000
      });
      return;
    } else {
      const obj = {
        firstName: this.fname.value,
        lastName: this.lname.value,
        emailId: this.email.value,
        password: this.password.value,
        gender: this.gender.value,
        dob:
          this.date.value != null
            ? this.date.value.toISOString().substring(0, 10)
            : null
      };

      this.http.post(this.url, obj).subscribe(
        res => {
          this.snackBar.open("Registration Successful!", "Dismiss", {
            duration: 1000
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
          this.snackBar.open("Error in Registration!", "Dismiss", {
            duration: 1000
          });
        }
      );

      this.fname.reset();
      this.fname.setErrors(null);
      this.lname.reset();
      this.lname.setErrors(null);
      this.email.reset();
      this.email.setErrors(null);
      this.password.setValue("");
      this.password.setErrors(null);
      this.gender.reset();
      this.date.reset();
    }
  }
}
