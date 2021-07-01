import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '@services/login/login.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  constructor(public loginService: LoginService, public router: Router) {}
  canActivate(): boolean {
    if (this.loginService.islogin()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
