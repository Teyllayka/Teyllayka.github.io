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

  changeInput(value: number) {
    if (
      (value == -1 && this.product.quantity > 1) ||
      (value == 1 && this.product.quantity < 99)
    ) {
      this.product.quantity += value;
      this.updateQuantityAndCounter(value);
    } else if (value == 0) {
      this.remove(this.product);
      this.counterService.SetCounter(-this.product.quantity);
      this.cartService.removeProduct({
        productId: this.product.productId,
        size: this.product.size,
        sugar: this.product.sugar,
        quantity: this.product.quantity,
      });
    }
  }

  updateQuantityAndCounter(value: number) {
    this.cartService.changeQuantity(
      {
        productId: this.product.productId,
        size: this.product.size,
        sugar: this.product.sugar,
        quantity: this.product.quantity,
      },
      this.product.quantity
    );

    this.counterService.SetCounter(value);
  }

  setInput(target: EventTarget | null) {
    let element = <HTMLInputElement>target;
    const parsedValue = parseInt(element.value, 10);
    let setvalue = 0;

    console.log(parsedValue, this);

    if (parsedValue <= 0) {
      setvalue = 1;
    } else {
      setvalue = parsedValue;
    }

    this.cartService.changeQuantity(
      {
        productId: this.product.productId,
        size: this.product.size,
        sugar: this.product.sugar,
        quantity: this.product.quantity,
      },
      setvalue
    );

    this.counterService.SetCounter(setvalue - this.product.quantity);
    this.product.quantity = setvalue;
  }
}
