import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { NewUserTaskComponent } from './pages/new-user-task/new-user-task.component';
import { UserComponent } from './pages/user/user.component';
import { UsersDashboardComponent } from './pages/users-dashboard/users-dashboard.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersMenuComponent } from './components/users-menu/users-menu.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserTaskComponent } from './pages/user-task/user-task.component';
import { UserTasksListComponent } from './pages/user-tasks-list/user-tasks-list.component';


@NgModule({
  declarations: [
    NewUserComponent,
    NewUserTaskComponent,
    UserComponent,
    UsersDashboardComponent,
    UsersListComponent,
    UsersMenuComponent,
    UserTaskComponent,
    UserTaskComponent,
    UserTasksListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
