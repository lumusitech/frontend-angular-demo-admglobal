import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ConfirmComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ConfirmComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
