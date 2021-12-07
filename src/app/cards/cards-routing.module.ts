import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsListComponent } from './pages/cards-list/cards-list.component';
import { NewCardComponent } from './pages/new-card/new-card.component';
import { CardComponent } from './pages/card/card.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CardsListComponent },
      { path: 'new', component: NewCardComponent },
      { path: ':id', component: CardComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
