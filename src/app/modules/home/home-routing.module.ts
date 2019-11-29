import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PersonalFeedComponent } from './personal-feed/personal-feed.component';
import { ArticlesListComponent } from '../../shared-component/articles-list/articles-list.component';

const routes: Routes = [{ path: '', component: HomeComponent, children: [
  {path: '', redirectTo: 'global', pathMatch: 'full'},
  { path: 'global', component: ArticlesListComponent },
  { path: 'feed', component: PersonalFeedComponent },
  { path: 'tag/:value', component: ArticlesListComponent }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
