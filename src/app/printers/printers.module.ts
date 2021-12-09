import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintersRoutingModule } from './printers-routing.module';
import { PrinterComponent } from './pages/printer/printer.component';
import { PrintersListComponent } from './pages/printers-list/printers-list.component';
import { NewPrinterComponent } from './pages/new-printer/new-printer.component';
import { PrintersDashboardComponent } from './pages/printers-dashboard/printers-dashboard.component';
import { PrintersMenuComponent } from './components/printers-menu/printers-menu.component';


@NgModule({
  declarations: [
    PrinterComponent,
    PrintersListComponent,
    NewPrinterComponent,
    PrintersDashboardComponent,
    PrintersMenuComponent
  ],
  imports: [
    CommonModule,
    PrintersRoutingModule
  ]
})
export class PrintersModule { }
