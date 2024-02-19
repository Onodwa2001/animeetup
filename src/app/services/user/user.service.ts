import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = 'http://localhost:8080/user/';
  private _auth_url: string = 'http://localhost:8080/auth/authenticate';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(this._auth_url, { username, password });
  }

}
