import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesDashboardComponent } from './components/examples-dashboard/examples-dashboard.component';
import { navigation } from './routes';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    component: ExamplesDashboardComponent,
  },
  ...navigation,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplesRoutingModule {}
