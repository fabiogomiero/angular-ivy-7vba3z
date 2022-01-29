import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CalendarInputComponent } from './form-input/calendar-input.component';
import { ReactiveFormArrayRoutingModule } from './reactive-form-array-routing.module';
import { ReactiveFormArrayComponent } from './reactive-form-array.component';

@NgModule({
  imports: [ReactiveFormArrayRoutingModule, SharedModule],
  declarations: [ReactiveFormArrayComponent, CalendarInputComponent],
})
export class ReactiveFormArrayModule {}
