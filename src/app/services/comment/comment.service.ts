import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private _url: string = 'http://localhost:8080/comment/';

  constructor(private http: HttpClient) { }

  createComment(data: any) {
    return this.http.post<any>(this._url + 'create', data);
  }

}
