import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counterChange: EventEmitter<number> = new EventEmitter();

  DecrementCounter(n: number) {
    this.counterChange.emit(n);
  }

  IncrementCounter() {
    this.counterChange.emit(1);
  }
}
