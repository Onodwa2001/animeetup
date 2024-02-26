import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { CommentService } from 'src/app/services/comment/comment.service';
import { PostServiceService } from 'src/app/services/post/post-service.service';

@Component({
  selector: 'comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})
export class CommentModalComponent implements OnInit {

  post!: any;
  isLoading: boolean = false;
  @Input() postId!: string;
  @Output() closeEvent = new EventEmitter<any>();
  @ViewChild('commentInput', { static: true }) commentInputElement!: ElementRef;

  constructor(private postService: PostServiceService, private cdr: ChangeDetectorRef, 
    private commentService: CommentService) {}

  ngOnInit(): void {
    this.getPostData();
  }

  getPostData() {
    this.postService.readPostByPostId(this.postId).subscribe(post => {
      this.post = post;
    });
  }

  closeModal() {
    this.closeEvent.emit();
  }

  createComment(postId: any, commentInput: string) {
    const commentData = {
      commentMessage: commentInput,
      post: { postId }
    }

    this.isLoading = true;

    this.commentService.createComment(commentData).subscribe(comment => {
      this.isLoading = false;
      this.commentInputElement.nativeElement.value = '';
    });
  }

}
