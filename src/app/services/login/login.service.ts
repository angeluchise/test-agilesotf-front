import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '@config/config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  login(user) {
    return this.http.post(config.api + config.endpoints.login, user);
  }

  refresh(token) {
    return this.http.post(config.api + config.endpoints.refresh, token);
  }
  payload() {
    return (localStorage.getItem(config.localUser)) ? JSON.parse(localStorage.getItem(config.localUser)) : {};
  }
  islogin() {
    return (localStorage.getItem(config.localToken)) ? true : false;
  }

}
