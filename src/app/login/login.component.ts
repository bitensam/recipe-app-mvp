import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

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

  constructor(private formBuild: FormBuilder, private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      email: [''],
      password: [''],
    });
  }
  login() {
    this.loginService.getUsers().subscribe((result) => {
      const loggedUser = result.find((user) => {
        return user.email === this.loginForm.value.email && user.password === this.loginForm.value.password;
      });
      if (loggedUser) {
        alert('Sukces');
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      } else {
        alert('Błędne dane logowania');
      }
    });
  }
}
