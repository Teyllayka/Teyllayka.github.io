import { Injectable } from '@angular/core';
import { Product } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products: Product[] | undefined;

  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<Product> {
    return this.http.get<Product>('data/products.json');
  }
}
