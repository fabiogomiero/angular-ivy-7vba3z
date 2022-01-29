import { Component, Input } from '@angular/core';

@Component({
  selector: 'back',
  templateUrl: `back.component.html`,
  styleUrls: [`back.component.css`],
})
export class BackComponent {
  @Input()
  public label: string;

  @Input()
  public link: Array<string>;

  @Input()
  public title: string;
}
