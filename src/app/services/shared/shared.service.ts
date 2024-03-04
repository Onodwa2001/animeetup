import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private data: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor() { }

  setData(data: any) {
    this.data.next(data);
  }

  getData() {
    return this.data.asObservable();
  }

}
