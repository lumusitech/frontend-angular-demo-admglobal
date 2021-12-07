import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminDashBoardComponent } from './pages/admin-dash-board/admin-dash-board.component';


@NgModule({
  declarations: [
    AdminDashBoardComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
