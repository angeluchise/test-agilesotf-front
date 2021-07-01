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
    return this.http.get(config.api + config.endpoints.user);
  }
  islogin() {
    return (localStorage.getItem(config.localToken)) ? true : false;
  }

}
