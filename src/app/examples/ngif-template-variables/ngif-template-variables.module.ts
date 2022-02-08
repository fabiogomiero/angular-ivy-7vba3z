import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgifTemplateVariablesRoutingModule } from './ngif-template-variables-routing.module';
import { NgifTemplateVariablesComponent } from './ngif-template-variables.component';

@NgModule({
  imports: [NgifTemplateVariablesRoutingModule, SharedModule],
  declarations: [NgifTemplateVariablesComponent],
})
export class NgifTemplateVariablesModule {}
