import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ArticlesListService } from '../../services/articles/articles-list.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Output() onPageChanged: EventEmitter<number> = new EventEmitter()
  pagesCount: number = this.articleListService.pagesCount;
  pageRange = 4;
  pageList = [];
  constructor(
    private articleListService: ArticlesListService
  ) { }

  ngOnInit() {
    for (let i=this.currentPage-this.pageRange; i<=this.currentPage+this.pageRange && i<=this.pagesCount; i++) {
      if (i>=1) this.pageList.push(i);
    }
  }

  moveToPage(i: number) {
    this.onPageChanged.emit(i);
  }
  nextPage() {
    this.moveToPage(this.currentPage+1);
  }

  previousPage() {
    this.moveToPage(this.currentPage-1)
  }

}
