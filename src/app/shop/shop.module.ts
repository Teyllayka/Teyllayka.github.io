import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './products/products.component';
import { RadiosComponent } from './radios/radios.component';

@NgModule({
  declarations: [ShopComponent, ProductsComponent, RadiosComponent],
  imports: [CommonModule],
  exports: [ShopComponent],
})
export class ShopModule {}
