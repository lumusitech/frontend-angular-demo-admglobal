import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountsListComponent } from './pages/discounts-list/discounts-list.component';
import { NewDiscountComponent } from './pages/new-discount/new-discount.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { DiscountsDashboardComponent } from './pages/discounts-dashboard/discounts-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DiscountsDashboardComponent,
    children: [
      { path: '', component: DiscountsListComponent },
      { path: 'new', component: NewDiscountComponent },
      { path: ':id', component: DiscountComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscountsRoutingModule { }
