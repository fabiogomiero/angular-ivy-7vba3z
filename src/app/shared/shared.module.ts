import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BackComponent } from './components/back/back.component';
import { DebugComponent } from './components/debug/debug.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [DebugComponent, BackComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DebugComponent,
    BackComponent,
  ],
})
export class SharedModule {}
