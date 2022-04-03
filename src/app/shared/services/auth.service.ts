import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../login/login.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: BehaviorSubject<boolean>;

  get authorized$() {
    return this.isLoggedIn.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedIn = new BehaviorSubject(!!localStorage.getItem('user'));
  }

  public login(loggedUser: User) {
    localStorage.setItem('user', JSON.stringify(loggedUser));
    this.isLoggedIn.next(true);
  }
  public logout() {
    console.log(this.isLoggedIn);
    localStorage.removeItem('user');
    this.isLoggedIn.next(false);
    this.router.navigate(['login']);
  }
}
