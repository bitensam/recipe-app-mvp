import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Role } from '../enums/role.enum';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const canActivateRoles = route.data['roles'] as Role[];

    return this.userService.user$.pipe(
      map((item) => canActivateRoles.includes(item!.role)),
      tap((canActivate) => {
        if (canActivate) {
          return;
        }

        alert('Ta opcja jest dla użytkowników o roli: ' + canActivateRoles.join(', '));
      })
    );
  }
}
