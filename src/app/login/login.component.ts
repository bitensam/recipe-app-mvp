import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Role } from '../role.enum';
import { UsersApiService } from './usersAPI.service';

export interface User {
  id: number;
  role: string;
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  loggedUser: User | null = null;

  constructor(private formBuild: FormBuilder, private authService: AuthService, private usersApiService: UsersApiService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      email: [''],
      password: [''],
    });
  }
  login(email: string, password: string) {
    this.usersApiService.login(email, password).subscribe((result) => {
      if (result.length === 0) {
        return alert('login failed');
      }
      this.loggedUser = result[0];
      if (email === this.loggedUser.email && password === this.loggedUser.password) {
        this.authService.login(this.loggedUser);
        this.loggedUser.role === Role.Author ? this.router.navigate(['dashboard/recipe-add']) : this.router.navigate(['dashboard/recipe-details']);
      }
    });
  }
}
