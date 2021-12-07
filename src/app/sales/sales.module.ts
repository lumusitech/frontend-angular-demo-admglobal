import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { NewSaleComponent } from './pages/new-sale/new-sale.component';
import { SalesListComponent } from './pages/sales-list/sales-list.component';
import { SaleComponent } from './pages/sale/sale.component';


@NgModule({
  declarations: [
    NewSaleComponent,
    SalesListComponent,
    SaleComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
