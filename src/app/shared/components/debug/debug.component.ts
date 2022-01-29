import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'debug',
  templateUrl: `debug.component.html`,
  styleUrls: [`debug.component.css`],
})
export class DebugComponent {
  @HostBinding('class.debug-hide')
  private isDebugHide: boolean = true;

  @Input()
  public value: any;

  public get debugHide(): string {
    return this.isDebugHide ? '' : 'show';
  }

  public toggleShow(): void {
    this.isDebugHide = !this.isDebugHide;
  }
}
