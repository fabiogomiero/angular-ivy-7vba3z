import { Component } from '@angular/core';
import { RouteExtended } from '../../../app.model';
import { navigation } from '../../routes';

@Component({
  selector: 'examples-dashboard',
  templateUrl: `examples-dashboard.component.html`,
})
export class ExamplesDashboardComponent {
  public examplesNav: Array<RouteExtended> = [...navigation];
}
