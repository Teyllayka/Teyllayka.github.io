import { Component, Input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider],
})
export class AppComponent {
  title = 'myApp';

  constructor(private router: Router) {}

  isHomePage(): boolean {
    return this.router.url === '/';
  }

  prepareRoute(outlet: RouterOutlet) {
    let animation_outlet =
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation'];
    return animation_outlet;
  }
}
