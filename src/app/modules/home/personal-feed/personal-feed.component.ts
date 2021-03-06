import { Component, OnInit } from '@angular/core';
import { Article } from '../../../classes/article';
import { Router } from '@angular/router';
import { ArticlesListService } from '../../../services/articles/articles-list.service';

@Component({
  selector: 'app-personal-feed',
  templateUrl: './personal-feed.component.html',
  styleUrls: ['./personal-feed.component.css']
})
export class PersonalFeedComponent implements OnInit {
  loadingArticles: boolean = true;
  currentPage: number;
  articles: Article[] = [] 
  constructor(
    private router: Router,
    private articleListService: ArticlesListService
  ) { }

  ngOnInit() {
    this.currentPage = 1;
    this.onPageChanged(this.currentPage);
  }

  onPageChanged(page: number) {
    this.loadingArticles = true;
    this.articles = [];
    this.articleListService.getFeed(page).subscribe(value => {
      this.loadingArticles = false;
      this.articles = value;
    });
  }
}
