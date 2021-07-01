import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { config } from '@config/config';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: boolean;
  loading: boolean;
  success: boolean;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem(config.localToken)) {
      this.router.navigate([config.router.home]);
    }
  }
  login (userData: NgForm) {
    console.log(userData.value);
    this.error = false;
    this.loading = true;
    this.loginService.login(userData.value).subscribe((data: any) => {
      this.loading = false;
      this.success = true;

      const { data: { user, payload } } = data;
      localStorage.setItem(config.localToken, payload.token);
      setTimeout(() => {
        this.router.navigate([config.router.home]);
      }, 1000)
    }, (error) => {
      this.loading = false;
      this.error = true;
    })
  }
}
