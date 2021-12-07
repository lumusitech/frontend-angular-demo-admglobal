import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesListComponent } from './pages/categories-list/categories-list.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CategoriesListComponent },
      { path: 'new', component: NewCategoryComponent },
      { path: ':id', component: CategoryComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
