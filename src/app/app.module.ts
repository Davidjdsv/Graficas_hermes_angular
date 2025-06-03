import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ChartDataComponent } from './services/chart-data/chart-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
