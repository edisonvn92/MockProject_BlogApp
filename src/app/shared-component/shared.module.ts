import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ArticleInfoComponent } from './article-info/article-info.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { RouterModule } from '@angular/router';
import { FormErrorMessagesComponent } from './form-error-messages/form-error-messages.component';
import { FollowButtonComponent } from './follow-button/follow-button.component';
import { MustMatchValidatorDirective } from '../utilities/validator/must-match.directive';



@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticlePreviewComponent,
    PaginationComponent,
    ArticleInfoComponent,
    FavoriteButtonComponent,
    FormErrorMessagesComponent,
    FollowButtonComponent,
    MustMatchValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ArticlesListComponent,
    ArticlePreviewComponent,
    PaginationComponent,
    ArticleInfoComponent,
    FavoriteButtonComponent,
    FormErrorMessagesComponent,
    FollowButtonComponent,
    MustMatchValidatorDirective
  ]
})
export class SharedModule { }
