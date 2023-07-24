import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './products/products.component';
import { RadiosComponent } from './radios/radios.component';
import { FormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [ShopComponent, ProductsComponent, RadiosComponent],
  imports: [CommonModule, FormsModule, ShopRoutingModule],
})
export class ShopModule {}
