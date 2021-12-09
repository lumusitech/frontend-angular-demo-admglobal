import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersListComponent } from './pages/providers-list/providers-list.component';
import { NewProviderComponent } from './pages/new-provider/new-provider.component';
import { ProviderComponent } from './pages/provider/provider.component';
import { ProvidersDashboardComponent } from './pages/providers-dashboard/providers-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ProvidersDashboardComponent,
    children: [
      { path: '', component: ProvidersListComponent },
      { path: 'new', component: NewProviderComponent },
      { path: ':id', component: ProviderComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }
