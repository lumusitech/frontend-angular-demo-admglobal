import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsMenuComponent } from './components/statistics-menu/statistics-menu.component';
import { StatisticsDashboardComponent } from './pages/statistics-dashboard/statistics-dashboard.component';


@NgModule({
  declarations: [
    StatisticsMenuComponent,
    StatisticsDashboardComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
