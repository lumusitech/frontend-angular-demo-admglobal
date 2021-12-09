import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CashFlowCloseComponent } from './pages/cash-flow-close/cash-flow-close.component';
import { CashFlowHistoryComponent } from './pages/cash-flow-history/cash-flow-history.component';
import { CashFlowHistoryItemComponent } from './pages/cash-flow-history-item/cash-flow-history-item.component';
import { CashFlowOpenComponent } from './pages/cash-flow-open/cash-flow-open.component';
import { CashFlowMenuComponent } from './components/cash-flow-menu/cash-flow-menu.component';
import { CashFlowDashboardComponent } from './pages/cash-flow-dashboard/cash-flow-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CashFlowDashboardComponent,
    children: [
      { path: '', component: CashFlowHistoryComponent },
      { path: 'open', component: CashFlowOpenComponent },
      { path: 'close', component: CashFlowCloseComponent },
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
