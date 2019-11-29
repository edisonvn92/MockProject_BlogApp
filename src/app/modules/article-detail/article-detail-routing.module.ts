import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleDetailComponent } from './article-detail.component';

const routes: Routes = [{ path: ':slug', component: ArticleDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleDetailRoutingModule { }
