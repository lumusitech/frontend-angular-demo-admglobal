import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsMenuComponent } from './pages/statistics-menu/statistics-menu.component';


@NgModule({
  declarations: [
    StatisticsMenuComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
