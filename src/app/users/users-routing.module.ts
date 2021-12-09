import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UserComponent } from './pages/user/user.component';
import { UserTasksListComponent } from './pages/user-tasks-list/user-tasks-list.component';
import { NewUserTaskComponent } from './pages/new-user-task/new-user-task.component';
import { UserTaskComponent } from './pages/user-task/user-task.component';
import { UsersDashboardComponent } from './pages/users-dashboard/users-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UsersDashboardComponent,
    children: [
      { path: '', component: UsersListComponent },
      { path: 'tasks', component: UserTasksListComponent },
      { path: 'new', component: NewUserComponent },
      { path: 'tasks/new', component: NewUserTaskComponent },
      { path: ':id', component: UserComponent },
      { path: 'tasks/:id', component: UserTaskComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
