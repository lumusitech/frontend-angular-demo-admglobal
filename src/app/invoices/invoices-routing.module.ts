import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesListComponent } from './pages/invoices-list/invoices-list.component';
import { NewInvoiceComponent } from './pages/new-invoice/new-invoice.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: InvoicesListComponent },
      { path: 'new', component: NewInvoiceComponent },
      { path: ':id', component: InvoiceComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
