import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailsListComponent } from './pages/emails-list/emails-list.component';
import { NewEmailAuthorizationComponent } from './pages/new-email-authorization/new-email-authorization.component';
import { EmailComponent } from './pages/email/email.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EmailsListComponent },
      { path: 'new', component: NewEmailAuthorizationComponent },
      { path: ':id', component: EmailComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailSystemRoutingModule { }
