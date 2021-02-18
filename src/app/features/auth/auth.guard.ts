import { Injectable } from '@angular/core';
import { CanLoad, Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    let status = false;
    localStorage.getItem('JWT') // localStorage.setItem('JWT',jwt) EN EL LOGIN
      ? (status = true)
      : this.router.navigate(['home']);
    return status;
  }
}

// this.router.navigate(['pipes'])
