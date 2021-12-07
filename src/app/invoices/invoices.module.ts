import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesListComponent } from './pages/invoices-list/invoices-list.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { NewInvoiceComponent } from './pages/new-invoice/new-invoice.component';


@NgModule({
  declarations: [
    InvoicesListComponent,
    InvoiceComponent,
    NewInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
