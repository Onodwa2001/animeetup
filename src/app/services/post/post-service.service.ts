import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval, switchMap } from 'rxjs';
import { Post } from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private _url = "http://localhost:8080/post/";
  private _votes_url = "http://localhost:8080/vote/";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this._url + 'get_all_posts')
  }

  getPostsByUsername(username: string): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this._url + 'get_posts_of/' + username);
  }

  readPostByPostId(id: string): Observable<any> {
    return interval(100).pipe(  // Polling every 100 miliseconds
      switchMap(() => this.http.get<any>(this._url + 'read/' + id))
    );
  }

  createPost(message: string): Observable<Post> {
    return this.http.post<Post>(this._url + 'create', { postMessage: message });
  }

  upVote(postId: string) {
    return this.http.post<any>(this._votes_url + 'upvote/' + postId, {});
  }
  
  downVote(postId: string) {
    return this.http.post<any>(this._votes_url + 'downvote/' + postId, {});
  }

}
