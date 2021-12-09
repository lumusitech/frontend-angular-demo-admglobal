import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintersListComponent } from './pages/printers-list/printers-list.component';
import { NewPrinterComponent } from './pages/new-printer/new-printer.component';
import { PrinterComponent } from './pages/printer/printer.component';
import { PrintersDashboardComponent } from './pages/printers-dashboard/printers-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PrintersDashboardComponent,
    children: [
      { path: '', component: PrintersListComponent },
      { path: 'new', component: NewPrinterComponent },
      { path: ':id', component: PrinterComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintersRoutingModule { }
