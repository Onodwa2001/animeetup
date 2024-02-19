import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private _url = "http://localhost:8080/post/";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this._url + 'get_all_posts');
  }

  getPostsByUsername(username: string): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this._url + 'get_posts_of/' + username);
  }

  createPost(message: string): Observable<Post> {
    return this.http.post<Post>(this._url + 'create', { postMessage: message });
  }

}
