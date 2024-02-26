import { formatDate } from '@angular/common';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  token: any;

  constructor(private router: Router) {
    this.token = localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : '';

    if (this.token) {
      let tokenExpirationDate = JSON.parse(atob(this.token.split('.')[1])).exp;
      let expirationDateRefined = Number.parseInt(tokenExpirationDate.toString() + '000'); // adding more digits to match Date.now()
      let currentDate = Date.now(); // in milliseconds

      if (currentDate > expirationDateRefined) {
        alert('Token expired');
        localStorage.removeItem('auth_token');
        router.navigate(['/login']);
      }
    }
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
