import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailSystemRoutingModule } from './email-system-routing.module';
import { EmailsListComponent } from './pages/emails-list/emails-list.component';
import { NewEmailAuthorizationComponent } from './pages/new-email-authorization/new-email-authorization.component';
import { EmailComponent } from './pages/email/email.component';


@NgModule({
  declarations: [
    EmailsListComponent,
    NewEmailAuthorizationComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    EmailSystemRoutingModule
  ]
})
export class EmailSystemModule { }
