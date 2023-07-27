import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counterChange: EventEmitter<number> = new EventEmitter();

  SetCounter(n: number) {
    this.counterChange.emit(n);
  }
}
