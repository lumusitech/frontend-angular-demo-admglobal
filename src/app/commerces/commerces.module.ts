import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceRoutingModule } from './commerces-routing.module';
import { CommerceComponent } from './pages/commerce/commerce.component';
import { CommerceNewComponent } from './pages/commerce-new/commerce-new.component';
import { CommercesListComponent } from './pages/commerces-list/commerces-list.component';



@NgModule({
  declarations: [
    CommerceComponent,
    CommerceNewComponent,
    CommercesListComponent
  ],
  imports: [
    CommonModule,
    CommerceRoutingModule
  ]
})
export class CommercesModule { }
