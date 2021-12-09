import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountsRoutingModule } from './discounts-routing.module';
import { DiscountsListComponent } from './pages/discounts-list/discounts-list.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { NewDiscountComponent } from './pages/new-discount/new-discount.component';
import { DiscountsDashboardComponent } from './pages/discounts-dashboard/discounts-dashboard.component';
import { DiscountsMenuComponent } from './components/discounts-menu/discounts-menu.component';


@NgModule({
  declarations: [
    DiscountsListComponent,
    DiscountComponent,
    NewDiscountComponent,
    DiscountsDashboardComponent,
    DiscountsMenuComponent
  ],
  imports: [
    CommonModule,
    DiscountsRoutingModule
  ]
})
export class DiscountsModule { }
