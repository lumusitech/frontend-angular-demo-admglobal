import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { ArticleComponent } from './pages/article/article.component';
import { NewArticleComponent } from './pages/new-article/new-article.component';


@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleComponent,
    NewArticleComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
