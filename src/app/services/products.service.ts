import { Injectable } from '@angular/core';
import { Product } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(
    []
  );

  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('data/products.json').pipe(
      tap((products) => {
        this.products.next(products);
      })
    );
  }
}
