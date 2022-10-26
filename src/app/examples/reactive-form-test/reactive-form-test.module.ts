import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormTestRoutingModule } from './reactive-form-test-routing.module';
import { ReactiveFormTestComponent } from './reactive-form-test.component';

@NgModule({
  imports: [ReactiveFormTestRoutingModule, SharedModule],
  declarations: [ReactiveFormTestComponent],
})
export class ReactiveFormTestModule {}
