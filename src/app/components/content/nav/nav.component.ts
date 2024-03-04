import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  @Output() chatPopupSignal = new EventEmitter<boolean>();
  inputStyle: {} = {
    "padding": "15px",
    "width": "300px"
  }

  constructor(private shared: SharedService) {}

  sendPopupSignal(): void {
    this.chatPopupSignal.emit(true);
    // this.shared.setData(true);
  }

}
