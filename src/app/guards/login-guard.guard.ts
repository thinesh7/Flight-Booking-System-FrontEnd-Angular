import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../service/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor( private loginService:LoginServiceService, private router:Router ){
  } 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {     
    if(localStorage.getItem('isValid') == 'true'){
      return true;
    }else{
      console.log('NNN');
      this.router.navigate(['admin/login']);
      return false;
    }
      
    
  }
  
}
