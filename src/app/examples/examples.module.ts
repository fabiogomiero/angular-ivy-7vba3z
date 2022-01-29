import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ExamplesDashboardComponent } from './components/examples-dashboard/examples-dashboard.component';
import { ExamplesRoutingModule } from './examples-routing.module';

@NgModule({
  imports: [SharedModule, ExamplesRoutingModule],
  declarations: [ExamplesDashboardComponent],
})
export class ExamplesModule {}
