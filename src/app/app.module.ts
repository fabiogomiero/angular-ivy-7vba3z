import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppDashboardComponent } from './views/app-dashboard/app-dashboard.component';
import { HelloComponent } from './views/hello.component';
import { NotFoundComponent } from './views/not-found.component';

@NgModule({
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NotFoundComponent,
    AppDashboardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
