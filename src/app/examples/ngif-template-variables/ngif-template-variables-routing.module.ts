import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgifTemplateVariablesComponent } from './ngif-template-variables.component';

const routes: Routes = [
  {
    path: '',
    component: NgifTemplateVariablesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgifTemplateVariablesRoutingModule {}
