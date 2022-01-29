import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { features } from './features';
import { AppDashboardComponent } from './views/app-dashboard/app-dashboard.component';
import { NotFoundComponent } from './views/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: AppDashboardComponent,
  },
  ...features,
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
