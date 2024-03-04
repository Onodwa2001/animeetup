import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from './services/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Animeetup';
  url = '';

  constructor(private router: Router, private sharedService: SharedService) { }  

  ngOnInit(): void {
    // we don't want to show the navbar in the login page
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        const pathname = new URL(currentUrl, window.location.origin).pathname;
        this.url = pathname;
      }
    });
  }

  receiveChatSignal(data: any) {
    this.sharedService.setData(data);
    console.log(data);
  }

}
