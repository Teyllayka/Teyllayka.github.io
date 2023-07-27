import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/types/types';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  @Output() public onAddToCart = new EventEmitter<string>();
  public productList: Product[] | undefined;

  constructor(
    private service: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.data.subscribe((value) => {
      this.service.products = value['products'].products;
      console.log(value['products'].products);
      this.productList = this.service.products;
    });
  }

  // constructor(private productsService: ProductsService) {}
}
