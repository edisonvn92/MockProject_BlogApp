import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleDetailRoutingModule } from './article-detail-routing.module';
import { ArticleDetailComponent } from './article-detail.component';
import { SharedModule } from '../../shared-component/shared.module';
import { ArticleInteractService } from '../../services/articles/article-interact.service';
import { ArticleMetaComponent } from './article-meta/article-meta.component';
import { ArticleContentComponent } from './article-content/article-content.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentService } from 'src/app/services/comments/comment.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../utilities/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    ArticleDetailComponent, 
    ArticleMetaComponent, 
    ArticleContentComponent, 
    CommentFormComponent, 
    CommentListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ArticleDetailRoutingModule
  ],
  providers: [
    ProfileService,
    ArticleInteractService,
    CommentService,
  ]
})
export class ArticleDetailModule { }
