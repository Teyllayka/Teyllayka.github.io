import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counterChange: EventEmitter<number> = new EventEmitter();

  IncrementCounter(number: number) {
    this.counterChange.emit(number);
  }
}
