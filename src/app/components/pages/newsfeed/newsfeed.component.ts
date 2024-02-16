import { Component } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent {

  posts: Array<any> = [
    {
      name: 'dfdjsgk',
      date: '20 March 2023',
      message: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.',
      votes: 0,
      comments: 0
    },
    {
      name: 'test',
      date: '10 February 2024',
      message: 'Hello There',
      votes: 1,
      comments: 0
    },
  ];

}
