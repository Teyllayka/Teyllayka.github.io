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
  isHovered = false;

  constructor(
    private counterService: CounterService,
    private cartService: CartService
  ) {}

  private productData() {
    return {
      productId: this.product.productId,
      size: this.product.size,
      sugar: this.product.sugar,
      quantity: this.product.quantity,
    };
  }

  changeInput(value: number) {
    if (
      (value == -1 && this.product.quantity > 1) ||
      (value == 1 && this.product.quantity < 99)
    ) {
      this.product.quantity += value;
      this.updateQuantityAndCounter(value);
    } else if (value == 0 || (value == -1 && this.product.quantity == 1)) {
      this.remove(this.product);
      this.counterService.SetCounter(-this.productData().quantity);
      this.cartService.removeProduct(this.productData());
    }
  }

  updateQuantityAndCounter(value: number) {
    this.cartService.changeQuantity(this.productData(), this.product.quantity);
    this.counterService.SetCounter(value);
  }

  setInput(target: EventTarget | null) {
    let element = <HTMLInputElement>target;
    const parsedValue = parseInt(element.value, 10);

    if (parsedValue <= 0) {
      this.changeInput(0);
    } else {
      let diff = parsedValue - this.product.quantity;
      this.product.quantity = parsedValue;
      this.cartService.changeQuantity(
        this.productData(),
        this.product.quantity
      );
      this.counterService.SetCounter(diff);
    }
  }
}
