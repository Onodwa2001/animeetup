import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';

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

  @ViewChild('postMessage', { static: true }) myElement!: ElementRef;

  ngOnInit(): void {
    if (this.data.postMessage.length > 70) {
      this.myElement.nativeElement.style.fontSize = '15px';
      this.myElement.nativeElement.style.lineHeight = '1.6em';
      console.log(this.myElement);
    }
  }

}
