import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { CustomersDashboardComponent } from './pages/customers-dashboard/customers-dashboard.component';
import { CustomersMenuComponent } from './components/customers-menu/customers-menu.component';


@NgModule({
  declarations: [
    CustomersListComponent,
    CustomerComponent,
    NewCustomerComponent,
    CustomersDashboardComponent,
    CustomersMenuComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
