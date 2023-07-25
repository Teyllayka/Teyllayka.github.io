import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from './routing.module';
import { CounterService } from './services/counter.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, RoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [CounterService, ProductsService],
})
export class AppModule {}
