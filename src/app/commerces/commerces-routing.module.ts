import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommerceComponent } from './pages/commerce/commerce.component';
import { CommerceNewComponent } from './pages/commerce-new/commerce-new.component';
import { CommercesListComponent } from './pages/commerces-list/commerces-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CommercesListComponent },
      { path: ':id', component: CommerceComponent },
      { path: 'new', component: CommerceNewComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule { }
