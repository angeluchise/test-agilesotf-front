import { Injectable, OnInit } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { config } from '@config/config';
import { LoginService } from './login/login.service';
import { GlobalState } from './even.service';
export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor, OnInit {
  count: number = 0;
  params: any;
  sub: any;
  constructor(private loginService: LoginService, private globalState: GlobalState) { }

  async ngOnInit() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(config.localToken);
    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          'authorization': `Bearer ${token}`,
        }
      });
    }

    return next.handle(request).pipe(catchError((error, caught): any => {
      this.handleAuthError(error);
    }) as any);
  }

  public handleAuthError(err: HttpErrorResponse) {
    if (err.status === 401) {
      this.loginService.refresh({refresh_token: localStorage.getItem(config.localRefresh)}).subscribe((result: any)=> {
        console.log(result);
        const { data: { payload } } = result;
        localStorage.setItem(config.localToken, payload.token);
        localStorage.setItem(config.localRefresh, payload.refresh_token);
        this.globalState.replaySubjectChanged('refresh', result);
      })
    }
    throw err;
  }

}
