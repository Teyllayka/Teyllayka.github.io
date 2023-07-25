import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() counter: number = 0;

  constructor(private counterService: CounterService) {
    this.counterService.counterChange.subscribe(() => {
      if (this.counter < 99) {
        this.counter += 1;
      }
    });
  }
}
