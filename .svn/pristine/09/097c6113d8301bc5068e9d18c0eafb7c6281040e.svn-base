import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/services/users/user-authentication.service';
import { ArticlesListService } from '../../services/articles/articles-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  yourFeedChosen: boolean = false;
  loadingTags: boolean = true;
  tags: string[];
  currentTag: string
  constructor(
    private router: Router,
    protected authService: UserAuthenticationService,
    protected articleListService: ArticlesListService
  ) { }

  ngOnInit() {
    this.articleListService.getTags().then(value => {
      this.loadingTags = false;
      this.tags = value;
    });
    if (this.authService.isAuthenticated().value) {
      this.router.navigate(['home/feed'])
    } else {
      this.router.navigate(['home/global'])
    }
  }
  getTag(tag: string) {
    this.articleListService.setFilter('tag');
    this.currentTag = tag;
  }

  isActive(instruction: any[]): boolean {
    // Set the second parameter to true if you want to require an exact match.
    return this.router.isActive(this.router.createUrlTree(instruction), false);
  }
}
