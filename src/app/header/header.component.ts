import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private _counterValue: number = 0;
  public displayCounter: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.counterChange.subscribe((n: number) => {
      if (n > 0) {
        this._counterValue += 1;
      } else {
        if (this._counterValue > 0) {
          this._counterValue += n;
        }
      }
      this.displayCounter = this._counterValue > 99 ? 99 : this._counterValue;
    });
  }
}
