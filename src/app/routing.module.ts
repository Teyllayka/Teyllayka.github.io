import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from './resolvers/product.resolver';
import { CartResolver } from './resolvers/cart.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { products: ProductResolver },
    children: [
      {
        path: '',
        data: { animation: 'isLeft' },
        loadChildren: () =>
          import('./shop/shop.module').then((m) => m.ShopModule),
      },
    ],
  },
  {
    path: 'cart',
    resolve: { products: CartResolver },
    children: [
      {
        path: '',
        data: { animation: 'isRight' },
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductResolver],
})
export class RoutingModule {}
