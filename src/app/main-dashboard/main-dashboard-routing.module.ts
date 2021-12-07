import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'sales', loadChildren: () => import('./../sales/sales.module').then(m => m.SalesModule) },
      { path: 'cash-flow', loadChildren: () => import('./../cash-flow/cash-flow.module').then(m => m.CashFlowModule) },
      { path: 'customers', loadChildren: () => import('./../customers/customers.module').then(m => m.CustomersModule) },
      { path: 'providers', loadChildren: () => import('./../providers/providers.module').then(m => m.ProvidersModule) },
      { path: 'statistics', loadChildren: () => import('./../statistics/statistics.module').then(m => m.StatisticsModule) },
      { path: 'reports', loadChildren: () => import('./../reports/reports.module').then(m => m.ReportsModule) },
      { path: 'articles', loadChildren: () => import('./../articles/articles.module').then(m => m.ArticlesModule) },
      { path: 'operations', loadChildren: () => import('./../operations/operations.module').then(m => m.OperationsModule) },
      { path: 'admin', loadChildren: () => import('./../administration/administration.module').then(m => m.AdministrationModule) },
      { path: 'commerces', loadChildren: () => import('./../commerces/commerces.module').then(m => m.CommercesModule) },
      { path: 'printers', loadChildren: () => import('./../printers/printers.module').then(m => m.PrintersModule) },
      { path: 'categories', loadChildren: () => import('./../categories/categories.module').then(m => m.CategoriesModule) },
      { path: 'users', loadChildren: () => import('./../users/users.module').then(m => m.UsersModule) },
      { path: 'cards', loadChildren: () => import('./../cards/cards.module').then(m => m.CardsModule) },
      { path: 'discounts', loadChildren: () => import('./../discounts/discounts.module').then(m => m.DiscountsModule) },
      { path: 'cash-flow-types', loadChildren: () => import('./../cash-flow-types/cash-flow-types.module').then(m => m.CashFlowTypesModule) },
      { path: 'invoices', loadChildren: () => import('./../invoices/invoices.module').then(m => m.InvoicesModule) },
      { path: 'email-system', loadChildren: () => import('./../email-system/email-system.module').then(m => m.EmailSystemModule) },
      { path: '**', redirectTo: 'menu' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainDashboardRoutingModule { }
