import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormTestComponent } from './reactive-form-test.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormTestRoutingModule {}
