import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsMenuComponent } from './pages/reports-menu/reports-menu.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
