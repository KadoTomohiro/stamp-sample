import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import  {StampComponent} from '../stamp/stamp'

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES, StampComponent],
  template: `
    <h1>Coop App</h1>
    <router-outlet></router-outlet>
    `,
})

export class AppComponent {
  public name: string = 'Angular';
}
