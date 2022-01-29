import { Route } from '@angular/router';

export interface RouteExtended extends Route {
  link: Array<string>;
  name: string;
  title: string;
  description?: string;
}
