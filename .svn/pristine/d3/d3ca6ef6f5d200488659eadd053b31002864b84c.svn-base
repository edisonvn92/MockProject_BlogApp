import { Component, OnInit } from '@angular/core';
import { ArticleInteractService } from '../../../services/articles/article-interact.service';

import { Router } from '@angular/router';
import { ProfileService } from '../../../services/profile/profile.service';
@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.css']
})
export class ArticleMetaComponent implements OnInit {
  article = this.articleService.getCurrentArticle();
  author = this.article.getValue().author;
  favBtnText = 'Favorite Post'
  constructor(
    protected profileService: ProfileService,
    protected articleService: ArticleInteractService
  ) { }

  ngOnInit() {}
  
  
   
}
