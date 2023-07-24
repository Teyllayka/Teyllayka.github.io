import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public data: any = {
    sugar: false,
    size: null,
  };

  @Input() name: string = '';
  @Input() price: number = 0.0;
  @Input() img: string = '';
  @Input() radios: number[] = [];

  constructor(private counterService: CounterService) {}

  public onSubmit() {
    console.log(this);
    this.counterService.IncrementCounter(1);
  }
}
