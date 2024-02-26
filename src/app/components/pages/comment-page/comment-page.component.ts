import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {
  
  isLoading: boolean = false;

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

  constructor(private commentService: CommentService) {

  }

  ngOnInit(): void {

  }

  getCurrentPost(): void {

  }

  

}
