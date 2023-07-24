import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './shop/shop.component'; // reference ShopComponent instead of ShopModule

const routes: Routes = [
  {
    path: '',
    component: ShopComponent, // Add ShopComponent here
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
