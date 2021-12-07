import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsMenuComponent } from './pages/statistics-menu/statistics-menu.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
