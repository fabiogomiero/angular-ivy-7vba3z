import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 routerLink="/">Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; cursor: pointer; }`],
})
export class HelloComponent {
  @Input() name: string;
}
