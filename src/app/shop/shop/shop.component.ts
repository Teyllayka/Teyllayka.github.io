import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  @Output() public onClick = new EventEmitter<string>();

  public send(event: any) {
    this.onClick.emit('hey');
  }

  public productList: any = [
    {
      price: 8.99,
      name: 'Extra Latte',
      img: 'assets/img/Cup2.png',
      options: [250, 500],
    },
    {
      price: 9.99,
      name: 'Cappuccino',
      img: 'assets/img/Cup3.png',
      options: [250, 500],
    },
    {
      price: 7.29,
      name: 'Moccachino',
      img: 'assets/img/Cup1.png',
      options: [250, 500],
    },
  ];
}
