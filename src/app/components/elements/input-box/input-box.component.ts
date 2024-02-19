import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {
  @Input() placeholder: String = '';
  @Input() styleObj: {} = {};
  @Input() type: String = '';
  @Input() formControlName = '';
  value: String = '';

  constructor(private shared: SharedService) {
  }

  

}
