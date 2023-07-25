import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CounterService } from '../../services/counter.service';
import { InfoService } from 'src/app/services/info.service';
import { Details, Product } from 'src/app/types/types';

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
    private infoService: InfoService
  ) {}

  public onSubmit() {
    console.log(this);
    this.counterService.IncrementCounter(1);
  }

  public showInfo() {
    this.infoService.DisplayInfo(this);
  }

  getSelectedPrice() {
    return this.price ? this.price[this.data.size] : 0;
  }
}
