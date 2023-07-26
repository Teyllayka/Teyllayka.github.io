import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from './routing.module';
import { CounterService } from './services/counter.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { InfoService } from './services/info.service';
import { PopupComponent } from './popup/popup.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PopupComponent],
  imports: [BrowserModule, RoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [CounterService, ProductsService, InfoService, CartService],
})
export class AppModule {}
