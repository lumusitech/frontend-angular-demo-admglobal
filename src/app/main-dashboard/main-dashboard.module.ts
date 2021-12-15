import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MainDashboardRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MainDashboardModule { }
