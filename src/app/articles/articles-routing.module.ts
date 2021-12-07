import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { NewArticleComponent } from './pages/new-article/new-article.component';
import { ArticleComponent } from './pages/article/article.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ArticlesListComponent },
      { path: 'new', component: NewArticleComponent },
      { path: ':id', component: ArticleComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
