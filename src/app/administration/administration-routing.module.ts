import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashBoardComponent } from './pages/admin-dash-board/admin-dash-board.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AdminDashBoardComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
