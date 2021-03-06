import { Component, OnInit } from '@angular/core';
import { ArticleInteractService } from '../../../services/articles/article-interact.service';

import { Router } from '@angular/router';
import { ProfileService } from '../../../services/profile/profile.service';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../../../classes/article';
import { Profile } from '../../../classes/profile';
@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.css']
})
export class ArticleMetaComponent implements OnInit {
  favBtnText = 'Favorite Post'
  constructor(
    private router: Router,
    private profileService: ProfileService,
    private articleService: ArticleInteractService
  ) { }

  ngOnInit() {
  }
  
  get currentArticle(): BehaviorSubject<Article> {
    return this.articleService.getCurrentArticle();
  }

  get clickedProfile(): BehaviorSubject<Profile> {
    return this.profileService.getClickedProfile();
  }

  isOwner(): boolean {
    return this.articleService.isOwner()
  }
  deleteArticle() {
    this.articleService.deleteArticle().subscribe(() => this.router.navigate(['home']) );
  }

   
}
