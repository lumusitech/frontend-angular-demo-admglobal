import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashFlowTypesRoutingModule } from './cash-flow-types-routing.module';
import { CashFlowTypesListComponent } from './pages/cash-flow-types-list/cash-flow-types-list.component';
import { CashFlowTypeComponent } from './pages/cash-flow-type/cash-flow-type.component';
import { NewCashFlowTypeComponent } from './pages/new-cash-flow-type/new-cash-flow-type.component';


@NgModule({
  declarations: [
    CashFlowTypesListComponent,
    CashFlowTypeComponent,
    NewCashFlowTypeComponent
  ],
  imports: [
    CommonModule,
    CashFlowTypesRoutingModule
  ]
})
export class CashFlowTypesModule { }
