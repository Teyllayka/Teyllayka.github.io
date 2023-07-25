import { Component, AfterViewInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Details, Product } from '../types/types';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements AfterViewInit {
  popupElement: HTMLElement | null | undefined;
  constructor(private infoService: InfoService) {}

  public name!: string;
  public details!: Details;
  public imgUrl!: string;
  public price!: number;

  ngAfterViewInit() {
    this.popupElement = document.getElementById('popup');
    this.infoService.displayInfo.subscribe((n) => {
      this.name = n.name;
      this.imgUrl = n.imgUrl;
      this.details = n.details;
      this.price = Object.values(n.price)[0];
      console.log(n);
      this.togglePopup();
    });
  }

  togglePopup(): void {
    if (this.popupElement != null) {
      if (this.popupElement.style.right === '0px') {
        this.popupElement.style.right = '-100%'; // Close the popup
      } else {
        this.popupElement.style.right = '0px'; // Open the popup
      }
    }
  }
}
