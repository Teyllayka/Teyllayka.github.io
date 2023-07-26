import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CounterService } from 'src/app/services/counter.service';
import { ProductInCart } from 'src/app/types/types';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() product!: ProductInCart;
  @Input() remove!: Function;

  constructor(
    private counterService: CounterService,
    private cartService: CartService
  ) {}

  decrementInput() {
    if (this.product.quantity > 1) {
      this.product.quantity -= 1;
      this.cartService.changeQuantity(
        {
          productId: this.product.productId,
          size: this.product.size,
          sugar: this.product.sugar,
          quantity: this.product.quantity,
        },
        this.product.quantity
      );
      //console.log(this);
      this.counterService.DecrementCounter(-1);
    }
  }

  incrementInput() {
    if (this.product.quantity < 99) {
      this.product.quantity += 1;
      this.cartService.changeQuantity(
        {
          productId: this.product.productId,
          size: this.product.size,
          sugar: this.product.sugar,
          quantity: this.product.quantity,
        },
        this.product.quantity
      );
      this.counterService.IncrementCounter();
    }
  }

  public removeProduct() {
    this.remove(this.product);
    this.counterService.DecrementCounter(-this.product.quantity);
    this.cartService.removeProduct({
      productId: this.product.productId,
      size: this.product.size,
      sugar: this.product.sugar,
      quantity: this.product.quantity,
    });
  }
}
