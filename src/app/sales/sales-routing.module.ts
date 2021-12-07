import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewSaleComponent } from './pages/new-sale/new-sale.component';
import { SaleComponent } from './pages/sale/sale.component';
import { SalesListComponent } from './pages/sales-list/sales-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SalesListComponent },
      { path: 'new', component: NewSaleComponent },
      { path: ':id', component: SaleComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
