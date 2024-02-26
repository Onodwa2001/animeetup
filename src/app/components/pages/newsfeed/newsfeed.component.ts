import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth/auth.service';
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
  @ViewChild('commentModal', { static: true }) commentModalElement!: ElementRef;
  @ViewChild('createPost', { static: true }) createPostElement!: ElementRef;
  signal: boolean = false;
  postId: string = '';

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

  constructor(private postService: PostServiceService, 
              private shared: SharedService, private router: Router) {
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
    });
  }

  submitPost(input: any): void {
    if (this.loggedInUser) {
      this.postService.createPost(input).subscribe(result => {
        // this.createPostElement.nativeElement.value = '';
        location.reload();
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  goToProfile(): void {
    if (this.loggedInUser) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  messageFromChild(signal: boolean) {
    this.signal = signal;
  }

  openCommentModal(): void {
    this.commentModalElement.nativeElement.style.display = 'block';
  }

  postIdMessageFromChild(id: string) {
    this.postId = id;
  }

  closeSignalFromComment() {
    this.signal = false;
  }

}
