import { Injectable } from '@angular/core';
import { Article } from '../../classes/article';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserAuthenticationService } from '../users/user-authentication.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ArticleInteractService {
  private _serverURL = 'https://conduit.productionready.io';
  

  private _currentArticle = new Article;
  constructor(
    private http: HttpClient,
    private authService: UserAuthenticationService
  ) { }

  getArticleBySlug(slug: string): Observable<Article> {
    return this.http.get(this._serverURL + '/api/articles/' + slug).pipe(
      map(value => value['article'] as Article),
      tap(value => this._currentArticle = value)
    )

  }

  isOwner(): boolean {
    return this.authService.getCurrentUsername() == this._currentArticle.author.username;
  }

  getCurrentArticle(): BehaviorSubject<Article> {
    return new BehaviorSubject(this._currentArticle);
  }


  favoriteArticle(slug: string): Observable<Article> {
    return this.http.post(this._serverURL + '/api/articles/' + slug + '/favorite', true).pipe(
      map(value => value['article'] as Article),
      tap(value => this._currentArticle = value)
    );
  }
  
  unfavoriteArticle(slug: string): Observable<Article> {
    return  this.http.delete(this._serverURL + '/api/articles/' + slug + '/favorite').pipe(
      map(value => value['article'] as Article),
      tap(value => this._currentArticle = value)
    );
  }

  deleteArticle(): Observable<any> {
    return this.http.delete(this._serverURL + '/api/articles/' + this._currentArticle.slug)
  }
}
