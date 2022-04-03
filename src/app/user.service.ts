import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { Role } from './role.enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = new BehaviorSubject<{ role: Role; id: number } | null>(null);

  get user$() {
    return this.user.asObservable();
  }

  constructor(private authService: AuthService) {
    this.authService.authorized$.subscribe(() => {
      this.user.next(JSON.parse(localStorage.getItem('user')!));
      console.log(this.user.value?.role);
    });
  }
}
