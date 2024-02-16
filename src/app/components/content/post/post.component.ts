import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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

  @Input() data = {
    name: '',
    date: '',
    message: '',
    votes: 0,
    comments: 0
  };

  @ViewChild('postMessage', { static: true }) myElement!: ElementRef;

  ngOnInit(): void {
    if (this.data.message.length > 70) {
      this.myElement.nativeElement.style.fontSize = '15px';
      this.myElement.nativeElement.style.lineHeight = '1.6em';
      console.log(this.myElement);
    }
  }

}
