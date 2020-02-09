import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout(): void {
    localStorage.clear();
    localStorage.setItem('isLoggedIn', 'false');
    window.location.reload();
  }
}
