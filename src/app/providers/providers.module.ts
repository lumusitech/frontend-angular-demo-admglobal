import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { ProviderComponent } from './pages/provider/provider.component';
import { ProvidersListComponent } from './pages/providers-list/providers-list.component';
import { NewProviderComponent } from './pages/new-provider/new-provider.component';


@NgModule({
  declarations: [
    ProviderComponent,
    ProvidersListComponent,
    NewProviderComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule
  ]
})
export class ProvidersModule { }
