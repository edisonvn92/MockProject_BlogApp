import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/classes/article';
import { Router } from '@angular/router';
import { ArticleInteractService } from '../../services/articles/article-interact.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() article = new Article;
  @Input() text = '';
  constructor(
    private router: Router,
    private articleService: ArticleInteractService
  ) { }

  ngOnInit() {
  }
toggleFavorited() {
     if (!this.article.favorited) {
       this.articleService.favoriteArticle(this.article.slug).subscribe(value => {
         this.article = this.articleService.getCurrentArticle().value;
       })
     } else {
       this.articleService.unfavoriteArticle(this.article.slug).subscribe( value => {
         this.article = this.articleService.getCurrentArticle().value;
       })
     }
    
   }


}
