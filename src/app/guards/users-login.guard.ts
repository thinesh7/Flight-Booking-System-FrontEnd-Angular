import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersLoginGuard implements CanActivate {

  constructor(private router: Router) {
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (localStorage.getItem('isUserValid') == 'true') {
        return true;
      } else {
        this.router.navigate(['users/users-login']);
        return false;
      }
  
}
}