import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  token: any;

  constructor() {
    this.token = localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiVmlnZ28iLCJwYXNzd29yZCI6IiQyYSQxMCRtS0JFMWpHL0VGM0VJVHNISkFtNmVPLjJHc2d2NzhUQWhIQy41UUVpVC9OaDZmUDdpaGV3cSIsImZpcnN0TmFtZSI6Ik9ub2R3YSIsImxhc3ROYW1lIjoiU2l5b3R1bGEifSwic3ViIjoiVmlnZ28iLCJpYXQiOjE3MDgyODcxODcsImV4cCI6MTcwODM3MzU4N30.2DUHvJiaGAbE2PJ_VWPot0MmCrAJXvxAbLjIUyXXFGM';
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenheadfer = req.clone({
      setHeaders: {
        Authorization: "Bearer " + this.token
      }
    });

    return next.handle(tokenheadfer);
  }
}
