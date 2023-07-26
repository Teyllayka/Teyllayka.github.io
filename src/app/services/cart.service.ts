import { Injectable } from '@angular/core';
import { AddedProduct, Product, ProductInCart } from '../types/types';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public products: AddedProduct[] = [];

  getProducts(): Observable<AddedProduct[]> {
    return of(this.products);
  }

  removeProduct(product: AddedProduct) {
    const productIndex = this.products.findIndex(
      (p) =>
        p.productId === product.productId &&
        p.size === product.size &&
        p.sugar === product.sugar
    );

    if (productIndex > -1) {
      this.products.splice(productIndex, 1);
    }
  }

  changeQuantity(product: AddedProduct, quantity: number) {
    const existingProduct = this.products.find(
      (p) =>
        p.productId === product.productId &&
        p.size === product.size &&
        p.sugar === product.sugar
    );

    if (existingProduct) {
      existingProduct.quantity = quantity;
    }
  }

  addProduct(product: AddedProduct) {
    const existingProduct = this.products.find(
      (p) =>
        p.productId === product.productId &&
        p.size === product.size &&
        p.sugar === product.sugar
    );

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.products.push(product);
    }
  }
}
