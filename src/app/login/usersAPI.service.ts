import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './login.component';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string) {
    return this.http.get<User[]>(`http://localhost:3000/users?email=${email}`);
  }
}
