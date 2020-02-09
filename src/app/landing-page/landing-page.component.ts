import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  isLoggedIn: string;
  id: string;
  userType: string;

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') == undefined) {
      localStorage.setItem('isLoggedIn', "false");
    }
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
    this.id = localStorage.getItem('token');
    this.userType = localStorage.getItem('userType');

    if (this.userType === null) { this.goLogin(); }

    if (this.userType === 'Admin') {
      this.router.navigateByUrl('admindash', { skipLocationChange: true });
    }
    if (this.userType === 'Student') {
      this.router.navigateByUrl('studentdash', { skipLocationChange: true });
    }
    if (this.userType === 'Teacher') {
      this.router.navigateByUrl('teacherdash', { skipLocationChange: true });
    }
  }

  logout(): void {
    this.authService.logout();
  }

  goHome() {
    if (this.userType === null) { this.goLogin(); }
    if (this.userType === 'Admin') { this.router.navigateByUrl('admindash', { skipLocationChange: true }); }
    if (this.userType === 'Student') { this.router.navigateByUrl('studentdash', { skipLocationChange: true }); }
    if (this.userType === 'Teacher') { this.router.navigateByUrl('teacherdash', { skipLocationChange: true }); }
  }

  goTryCanvas() {
    this.router.navigateByUrl('canvas', { skipLocationChange: true });
  }

  goLogin() {
    this.router.navigateByUrl('login', { skipLocationChange: true });
  }

  goRegister() {
    this.router.navigateByUrl('register', { skipLocationChange: true });
  }

}
