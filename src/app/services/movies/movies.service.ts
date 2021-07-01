import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '@config/config';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http: HttpClient) { }

  getNowPlaying(page) {
    const params = new HttpParams()
    .set('page', page)
    return this.http.get(config.api + config.endpoints.movies + config.endpoints.now_playing, {params});
  }
  getPopular(page) {
    const params = new HttpParams()
    .set('page', page)
    return this.http.get(config.api + config.endpoints.movies + config.endpoints.popular, {params});
  }
  getById(id, page) {
    const params = new HttpParams()
    .set('page', page)
    return this.http.get(`${config.api +config.endpoints.movies + id}/${config.endpoints.actors}`, {params});
  }
}
