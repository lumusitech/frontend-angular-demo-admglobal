import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashFlowRoutingModule } from './cash-flow-routing.module';
import { CashFlowHistoryComponent } from './pages/cash-flow-history/cash-flow-history.component';
import { CashFlowOpenComponent } from './pages/cash-flow-open/cash-flow-open.component';
import { CashFlowCloseComponent } from './pages/cash-flow-close/cash-flow-close.component';
import { CashFlowMenuComponent } from './pages/cash-flow-menu/cash-flow-menu.component';
import { CashFlowHistoryItemComponent } from './pages/cash-flow-history-item/cash-flow-history-item.component';


@NgModule({
  declarations: [
    CashFlowHistoryComponent,
    CashFlowOpenComponent,
    CashFlowCloseComponent,
    CashFlowMenuComponent,
    CashFlowHistoryItemComponent
  ],
  imports: [
    CommonModule,
    CashFlowRoutingModule
  ]
})
export class CashFlowModule { }
