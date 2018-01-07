import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EventService {

  event: BehaviorSubject<any>;
  constructor() {
      this.event = new BehaviorSubject<any>(null);
  }

  eventFired(msg:any) {
      this.event.next(msg);
  }
}
