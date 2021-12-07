import { CashFlowMenuComponent } from './pages/cash-flow-menu/cash-flow-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CashFlowCloseComponent } from './pages/cash-flow-close/cash-flow-close.component';
import { CashFlowHistoryComponent } from './pages/cash-flow-history/cash-flow-history.component';
import { CashFlowHistoryItemComponent } from './pages/cash-flow-history-item/cash-flow-history-item.component';
import { CashFlowOpenComponent } from './pages/cash-flow-open/cash-flow-open.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CashFlowMenuComponent },
      { path: 'open', component: CashFlowOpenComponent },
      { path: 'close', component: CashFlowCloseComponent },
      { path: 'history', component: CashFlowHistoryComponent },
      { path: ':id', component: CashFlowHistoryItemComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashFlowRoutingModule { }
