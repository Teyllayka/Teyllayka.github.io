import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider],
})
export class AppComponent {
  title = 'myApp';

  prepareRoute(outlet: RouterOutlet) {
    let animation_outlet =
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation'];
    return animation_outlet;
  }
}
