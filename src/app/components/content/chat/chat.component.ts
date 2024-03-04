import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { MessageService } from 'src/app/services/message/message.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public users!: Array<User>;
  public messages!: Array<any>;
  public loggedInUser!: any;
  public friendId!: string;
  public placeholder!: string;
  @ViewChild('sendMessageForm', { static: true }) formElement!: ElementRef;

  constructor(private messageService: MessageService, private userService: UserService) {
    let token: any = localStorage.getItem('auth_token');
    let user = token ? JSON.parse(atob(token.split('.')[1])) : '';
    this.loggedInUser = user;
  }

  ngOnInit(): void {
    this.getUsers();

    if (!this.placeholder) {
      // remove placeholder
      this.formElement.nativeElement.style.display = "none";
    }
  }

  createMessage(): void {
    
  }

  setPlaceHolder() {
    this.placeholder = `Write ${this.friendId} a message`;
  }

  sendMessage(input: any): void {
    let message: any = {
      sender: {
        username: this.loggedInUser.sub
      },
      receiver: {
        username: this.friendId
      },
      content: input,
      isRead: false
    }

    this.messageService.sendMessage(message).subscribe(addedMessage => {
      this.messages.push(addedMessage);
    });
  }

  getMessages(friendId: String): void {
    this.messageService.getMessages(friendId.toString()).subscribe(messages => {
      this.messages = messages;
      this.friendId = friendId.toString();
      this.setPlaceHolder();
      this.formElement.nativeElement.style.display = "flex";
      console.log(messages);
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
