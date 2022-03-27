import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './login.component';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
}
