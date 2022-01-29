import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormArrayComponent } from './reactive-form-array.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormArrayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormArrayRoutingModule {}
