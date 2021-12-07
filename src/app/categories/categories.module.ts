import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListComponent } from './pages/categories-list/categories-list.component';
import { CategoryComponent } from './pages/category/category.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';


@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoryComponent,
    NewCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
