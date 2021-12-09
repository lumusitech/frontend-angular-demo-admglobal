import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsListComponent } from './pages/cards-list/cards-list.component';
import { CardComponent } from './pages/card/card.component';
import { NewCardComponent } from './pages/new-card/new-card.component';
import { CardsDashboardComponent } from './pages/cards-dashboard/cards-dashboard.component';
import { CardsMenuComponent } from './components/cards-menu/cards-menu.component';


@NgModule({
  declarations: [
    CardsListComponent,
    CardComponent,
    NewCardComponent,
    CardsDashboardComponent,
    CardsMenuComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule
  ]
})
export class CardsModule { }
