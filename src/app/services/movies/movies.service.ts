import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '@config/config';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http: HttpClient) { }

  getNowPlaying() {
    return this.http.get(config.api + config.endpoints.movies + config.endpoints.now_playing);
  }
  getPopular() {
    return this.http.get(config.api + config.endpoints.movies + config.endpoints.popular);
  }
  getById(id) {
    return this.http.get(`${config.api +config.endpoints.movies + id}/${config.endpoints.actors}`);
  }
}
