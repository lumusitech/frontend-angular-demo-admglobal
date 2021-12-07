import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashFlowTypesListComponent } from './pages/cash-flow-types-list/cash-flow-types-list.component';
import { NewCashFlowTypeComponent } from './pages/new-cash-flow-type/new-cash-flow-type.component';
import { CashFlowTypeComponent } from './pages/cash-flow-type/cash-flow-type.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CashFlowTypesListComponent },
      { path: 'new', component: NewCashFlowTypeComponent },
      { path: ':id', component: CashFlowTypeComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashFlowTypesRoutingModule { }
