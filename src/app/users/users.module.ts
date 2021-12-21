import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { NewUserTaskComponent } from './pages/new-user-task/new-user-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './pages/user/user.component';
import { UsersDashboardComponent } from './pages/users-dashboard/users-dashboard.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersMenuComponent } from './components/users-menu/users-menu.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserTaskComponent } from './pages/user-task/user-task.component';
import { UserTasksListComponent } from './pages/user-tasks-list/user-tasks-list.component';
import { UserService } from './services/user.service';
import { UsersSnakWindowComponent } from './components/users-snak-window/users-snak-window.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';


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
    UsersSnakWindowComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ],
  providers: [UserService]
})
export class UsersModule { }
