import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { ArticleComponent } from './pages/article/article.component';
import { NewArticleComponent } from './pages/new-article/new-article.component';
import { ArticlesDashboardComponent } from './pages/articles-dashboard/articles-dashboard.component';
import { ArticlesMenuComponent } from './components/articles-menu/articles-menu.component';


@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleComponent,
    NewArticleComponent,
    ArticlesDashboardComponent,
    ArticlesMenuComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
