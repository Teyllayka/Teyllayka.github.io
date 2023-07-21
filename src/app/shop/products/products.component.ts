import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() name: string = '';
  @Input() price: number = 0.0;
  @Input() img: string = '';
  @Input() ratios: number[] = [];
  @Output() public onAddToCart = new EventEmitter<string>();

  public addToCart(event: Event) {
    event.preventDefault();
    this.onAddToCart.emit('hey');
  }
}
