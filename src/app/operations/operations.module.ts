import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsDashboardComponent } from './pages/operations-dashboard/operations-dashboard.component';
import { OperationsMenuComponent } from './components/operations-menu/operations-menu.component';


@NgModule({
  declarations: [
    OperationsDashboardComponent,
    OperationsMenuComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule
  ]
})
export class OperationsModule { }
