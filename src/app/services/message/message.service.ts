import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _url = 'http://localhost:8080/message/';

  constructor(private http: HttpClient) { }

  sendMessage(message: any): Observable<any> {
    return this.http.post<any>(`${this._url}create`, message);
  }

  getMessages(userId: string): Observable<any> {
    return this.http.get<any>(`${this._url}get_my_messages_with/${userId}`);
  }

}
