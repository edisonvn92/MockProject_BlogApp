import { Injectable } from '@angular/core';
import { Article } from '../../classes/article';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserAuthenticationService } from '../users/user-authentication.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ArticleInteractService {
  private _serverURL = 'https://conduit.productionready.io';
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token'),
    })
  };

  private _currentArticle = new Article;
  constructor(
    private http: HttpClient,
    private authService: UserAuthenticationService
  ) { }

  getArticleBySlug(slug: string): Promise<Article> {
    return new Promise((resolve, reject) => {
      this.http.get(this._serverURL + '/api/articles/' + slug, this.authService.isAuthenticated().value ? this._httpOptions : undefined).subscribe(
        value => {
          this._currentArticle = value['article'] as Article;
          resolve(this._currentArticle);
        },
        error => {
          reject(error);
        }
      )
    })
  }

  isOwner(): boolean {
    return this.authService.getCurrentUsername() == this._currentArticle.author.username;
  }

  getCurrentArticle(): BehaviorSubject<Article> {
    return new BehaviorSubject(this._currentArticle);
  }

  favoriteArticle(slug: string): Promise<Article> {
    return new Promise((resolve, reject) => {
      this.http.post(this._serverURL + '/api/articles/' + slug + '/favorite', true, this._httpOptions).subscribe(
        value => {
          this._currentArticle = value['article'] as Article;
          resolve(this._currentArticle);
        }, error => {
          reject(error);
        }
      )
    })
  }

  unfavoriteArticle(slug: string): Promise<Article> {
    return new Promise((resolve, reject) => {
      this.http.delete(this._serverURL + '/api/articles/' + slug + '/favorite', this._httpOptions).subscribe(
        value => {
          this._currentArticle = value['article'] as Article;
          resolve(this._currentArticle);
        }, error => {
          reject(error);
        }
      )
    })
  }
}
