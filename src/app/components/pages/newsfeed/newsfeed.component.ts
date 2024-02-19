import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  public loggedInUser: any = {};

  public posts: Array<Post> = [
  ];

  inputStyle: {} = {
    "padding": "15px",
    "width": "500px"
  }

  requests: Array<any> = [
    {name: "", date: "", picture: ""},
    {name: "", date: "", picture: ""},
    {name: "", date: "", picture: ""},
    {name: "", date: "", picture: ""}
  ]

  constructor(private postService: PostServiceService, private shared: SharedService, private router: Router) {

  }

  ngOnInit(): void {
    let token: any = localStorage.getItem('auth_token');
    let user = token ? JSON.parse(atob(token.split('.')[1])) : '';
    this.loggedInUser = user;
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }

  submitPost(input: any): void {
    this.postService.createPost(input).subscribe(result => {
      alert('Post created');
      location.reload();
    });
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

}
