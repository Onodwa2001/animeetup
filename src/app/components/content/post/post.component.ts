import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { CommentService } from 'src/app/services/comment/comment.service';
import { PostServiceService } from 'src/app/services/post/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  inputStyle: {} = {
    "padding": "15px",
    "width": "300px"
  }

  @Input() data: Post = {
    postId: String(),
    postMessage: String(),
    upVotes: 0,
    downVotes: 0,
    numberOfComments: 0,
    date: String(),
    postAuthor: {
      username: String(),
      password: String(),
      firstName: String(),
      lastName: String()
    }
  };

  @ViewChild('postMessage', { static: true }) postMessageElement!: ElementRef;
  @ViewChild('sendBtn', { static: true }) sendBtnElement!: ElementRef;
  @ViewChild('commentInput', { static: true }) commentInputElement!: ElementRef;
  @Output() dataEvent = new EventEmitter<boolean>();
  @Output() postIdEvent = new EventEmitter<string>();
  isLoading: boolean = false;

  constructor(private postService: PostServiceService, private commentService: CommentService) {}

  ngOnInit(): void {
    if (this.data.postMessage.length > 70) {
      this.postMessageElement.nativeElement.style.fontSize = '15px';
      this.postMessageElement.nativeElement.style.lineHeight = '1.6em';
      console.log(this.postMessageElement);
    }
  }

  notifyParents() {
    this.dataEvent.emit(true);
    this.postIdEvent.emit(this.data.postId.toString());
  }

  upVote() {
    this.postService.upVote(this.data.postId.toString()).subscribe(vote => {
      console.log(vote.post);
      this.data.downVotes = vote.post.downVotes;
      this.data.upVotes = vote.post.upVotes;
    });
  }

  downVote() {
    this.postService.downVote(this.data.postId.toString()).subscribe(vote => {
      console.log(vote.post);
      this.data.downVotes = vote.post.downVotes;
      this.data.upVotes = vote.post.upVotes;
    });
  }

  createComment(postId: any, commentInput: string) {
    const commentData = {
      commentMessage: commentInput,
      post: {
        postId
      }
    }

    this.isLoading = true;

    this.commentService.createComment(commentData).subscribe(comment => {
      this.isLoading = false
      this.commentInputElement.nativeElement.value = '';
    })
  }

}
