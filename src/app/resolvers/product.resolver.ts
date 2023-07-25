import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';
import { Product } from '../types/types';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<Observable<Product>> {
  constructor(private service: ProductsService) {}

  resolve(): Observable<Product> {
    return this.service.fetchProducts();
  }
}
