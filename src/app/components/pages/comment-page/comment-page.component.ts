import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {
  
  currentPost: any = {
    post: {
      postId: "",
      postMessage: "",
      upVotes: 0,
      downVotes: 0,
      numberOfComments: 0,
      date: "",
      postAuthor: {
        username: "",
        password: "",
        firstName: "",
        lastName: ""
      }
    },
    comments: []
  }

  constructor() {

  }

  ngOnInit(): void {

  }

  getCurrentPost(): void {

  }

}
