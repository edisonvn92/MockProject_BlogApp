import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PersonalFeedComponent } from './personal-feed/personal-feed.component';
import { SharedModule } from '../../shared-component/shared.module';
import { RouterModule } from '@angular/router';
import { ArticlesListService } from '../../services/articles/articles-list.service';


@NgModule({
  declarations: [
    HomeComponent,
    PersonalFeedComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers: [ArticlesListService]
})
export class HomeModule { }
