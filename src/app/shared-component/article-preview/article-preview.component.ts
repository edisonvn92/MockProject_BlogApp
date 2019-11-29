import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../classes/article';
import { Router } from '@angular/router';
import { ArticleInteractService } from '../../services/articles/article-interact.service';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css'],
  providers: [ArticleInteractService]
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: Article;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  

}
