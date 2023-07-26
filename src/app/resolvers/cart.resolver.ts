import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AddedProduct, Product } from '../types/types';
import { CartService } from '../services/cart.service';

@Injectable({ providedIn: 'root' })
export class CartResolver implements Resolve<Observable<AddedProduct[]>> {
  constructor(private service: CartService) {}

  resolve(): Observable<AddedProduct[]> {
    return this.service.getProducts();
  }
}
