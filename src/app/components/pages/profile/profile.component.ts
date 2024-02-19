import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostServiceService } from 'src/app/services/post/post-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedInUser: any = '';
  myPosts: Array<Post> = []

  constructor(private postService: PostServiceService) {
    let token: any = localStorage.getItem('auth_token');
    this.loggedInUser = token ? JSON.parse(atob(token.split('.')[1])) : '';
  }

  ngOnInit(): void {
      this.getCurrentUserPosts();
  }

  getCurrentUserPosts() {
    if (this.loggedInUser) {
      this.postService.getPostsByUsername(this.loggedInUser.sub).subscribe(posts => {
        this.myPosts = posts;
      })
    } else {
      // get from url
    }
  }

}
