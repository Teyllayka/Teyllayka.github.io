import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  displayInfo: EventEmitter<Product> = new EventEmitter();

  DisplayInfo(product: Product) {
    this.displayInfo.emit(product);
  }
}
