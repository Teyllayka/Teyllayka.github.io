import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { InfoService } from 'src/app/services/info.service';
import { Details } from 'src/app/types/types';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public data: any = {
    sugar: false,
    size: null,
  };

  public keys: string[] = [];

  @Input() name!: string;
  @Input() price!: { [key: string]: number };
  @Input() imgUrl!: string;
  @Input() stamp: boolean = false;
  @Input() id: number = 0;
  @Input() details!: Details;

  ngOnInit() {
    if (this.price) {
      this.keys = Object.keys(this.price);
      if (!this.data.size) {
        this.data.size = this.keys[0];
      }
    }
  }

  constructor(
    private counterService: CounterService,
    private infoService: InfoService,
    private cartService: CartService
  ) {}

  public onSubmit() {
    this.counterService.IncrementCounter();
    this.cartService.addProduct({
      productId: this.id,
      size: this.data.size,
      sugar: this.data.sugar,
      quantity: 1,
    });
  }

  public showInfo() {
    this.infoService.DisplayInfo(this);
  }

  getSelectedPrice() {
    return this.price ? this.price[this.data.size] : 0;
  }
}
