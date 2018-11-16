import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './services/login-service.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthAdminGuard implements CanActivate {
  constructor(private user: LoginService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage.getItem("role") === 'Administrator' &&  localStorage.getItem("session")) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
  }
}