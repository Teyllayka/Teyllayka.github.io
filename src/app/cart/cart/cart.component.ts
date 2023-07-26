import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CounterService } from 'src/app/services/counter.service';
import { ProductsService } from 'src/app/services/products.service';
import { Product, ProductInCart } from 'src/app/types/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() lol: number = 0;
  public productList: ProductInCart[] = [];

  removeFromList(productToRemove: ProductInCart) {
    this.productList = this.productList.filter(
      (product) => product !== productToRemove
    );
  }

  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.activatedRoute.data.subscribe((value) => {
      this.cartService.products = value['products'];
      const products = this.productService.products;

      this.cartService.products.forEach((productComponent) => {
        const currentProduct = products.find(
          (product) => product.id === productComponent.productId
        );

        const product: ProductInCart = {
          productId: productComponent.productId,
          size: productComponent.size,
          sugar: productComponent.sugar,
          quantity: productComponent.quantity,
          imgUrl: currentProduct!.imgUrl,
          name: currentProduct!.name,
          price: currentProduct!.price[productComponent.size],
        };

        this.productList.push(product);
      });
    });
  }
}
