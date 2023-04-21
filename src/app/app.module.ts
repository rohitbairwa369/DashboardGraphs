import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapReportComponent } from './pages/map-report/map-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import { SkeletonModule } from 'primeng/skeleton';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    MapReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    ChartModule,
    ReactiveFormsModule,
    SkeletonModule,
    NgApexchartsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent,DashboardComponent]
})
export class AppModule { }
