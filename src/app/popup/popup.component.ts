import { Component, AfterViewInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Details } from '../types/types';
import { Router } from '@angular/router';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [
    trigger('openPopup', [
      state(
        'open',
        style({
          right: '0px',
        })
      ),
      state(
        'closed',
        style({
          right: '-100%',
        })
      ),
      transition('* => closed', [animate('0.5s')]),
      transition('* => open', [animate('0.5s')]),
    ]),
  ],
})
export class PopupComponent implements AfterViewInit {
  popupElement!: HTMLElement;
  constructor(private infoService: InfoService) {}

  public name!: string;
  public details: Details = {
    calories: 0,
    totalFat: 0,
    cholesterol: 0,
    sodium: 0,
    totalCarbohydrate: 0,
    protein: 0,
    vitaminD: 0,
    cancium: 0,
  };
  public imgUrl!: string;
  public price!: number;
  public isOpen = false;

  ngAfterViewInit() {
    this.popupElement = document.getElementById('popup')!;
    this.infoService.displayInfo.subscribe((n) => {
      this.name = n.name;
      this.imgUrl = n.imgUrl;
      this.details = n.details;
      this.price = Object.values(n.price)[0];
      this.isOpen = !this.isOpen;
    });
  }

  togglePopup(): void {
    this.isOpen = !this.isOpen;
  }
}
