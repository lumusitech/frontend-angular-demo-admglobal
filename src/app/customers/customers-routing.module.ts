import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './pages/customer/customer.component';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CustomersListComponent },
      { path: 'new', component: NewCustomerComponent },
      { path: ':id', component: CustomerComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
