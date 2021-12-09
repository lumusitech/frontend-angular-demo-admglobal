import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatisticsMenuComponent } from './components/statistics-menu/statistics-menu.component';
import { StatisticsDashboardComponent } from './pages/statistics-dashboard/statistics-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsDashboardComponent,
    children: [
      {
        path: '',
        component: StatisticsMenuComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
