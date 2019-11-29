import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleInteractService } from '../../services/articles/article-interact.service';
import { ArticleModifyService } from '../../services/articles/article-modify.service';
import { SharedModule } from '../../shared-component/shared.module';


@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    EditorRoutingModule
  ],
  providers: [ArticleInteractService]
})
export class EditorModule { }
