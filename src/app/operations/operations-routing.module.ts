import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsDashboardComponent } from './pages/operations-dashboard/operations-dashboard.component';
import { OperationsMenuComponent } from './components/operations-menu/operations-menu.component';

const routes: Routes = [
  {
    path: '',
    component: OperationsDashboardComponent,
    children: [
      { path: '', component: OperationsMenuComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
