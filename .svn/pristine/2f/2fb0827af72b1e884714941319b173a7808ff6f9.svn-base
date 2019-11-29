import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../classes/article';
import { ArticleInteractService } from '../../../services/articles/article-interact.service';


@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {
  article = this.articleService.getCurrentArticle();
  body = [];
  tagList = []
  constructor(
    private articleService: ArticleInteractService
  ) { }

  ngOnInit() {
    this.article.subscribe(value => {
      this.body = value.body.split(/\n/);
      this.tagList = value.tagList;
    })
  }


}
