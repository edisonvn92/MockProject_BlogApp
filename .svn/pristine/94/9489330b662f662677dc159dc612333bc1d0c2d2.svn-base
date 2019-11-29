import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Article } from '../../classes/article';
import { ArticlesListService } from '../../services/articles/articles-list.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'], 
})
export class ArticlesListComponent implements OnInit {
  loadingArticles: boolean = true;
  currentPage: number;
  articles: Article[] = [];
  filterValue = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleListService: ArticlesListService
  ) { }

  ngOnInit() {
    this.currentPage = 1;
    this.route.params.subscribe((params: {value: string}) => {
      this.filterValue = params.value;
      
    this.onPageChanged(this.currentPage);
    })
  }

  onPageChanged(page: number) {
    this.loadingArticles = true;
    this.articles = [];
    this.articleListService.getArticlesWithFilter(page, this.filterValue).then(value => {
      this.currentPage = page;
      this.loadingArticles = false;
      this.articles = value;
    }, error => {
      console.log(error);
      this.router.navigate(['/home/global'])
    })

  }

}
