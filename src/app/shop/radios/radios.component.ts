import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
})
export class RadiosComponent {
  @Input() num: number = 0;
}
