import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Article } from '../../classes/article';
import { UserAuthenticationService } from '../users/user-authentication.service';

@Injectable()
export class ArticlesListService {
  private _serverURL = 'https://conduit.productionready.io';
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token'),
    })
  };

  private _pageLimit: number = 10;
  private _pagesCount: number;
  private _filter: string;


  constructor(
    private http: HttpClient,
    private authService: UserAuthenticationService
  ) { }

  get pageLimit(): number {
    return this._pageLimit;
  }

  set pageLimit(limit: number) {
    this._pageLimit = limit;
  }

  get pagesCount(): number {
    return this._pagesCount;
  }

  getTags(): Promise<string[]> {
    return new Promise(resolve => {
      this.http.get(this._serverURL + '/api/tags').subscribe(
        value => {
          resolve(value['tags'] as string[])
        }
      )
    });
  }

  setFilter(filter: string) {
    this._filter = filter;
  }


  getArticlesWithFilter(page: number, filterValue?: string): Promise<Article[]> {
    let offset = (page - 1) * this.pageLimit;
    let apiURL = this._serverURL + '/api/articles?limit=' + this.pageLimit;
     if (this._filter!='' && filterValue && filterValue!='') {
      apiURL+= `&${this._filter}=${filterValue}`;
    }
    
    if (offset > 0) apiURL += ('&offset=' + offset);
    return new Promise((resolve, reject) => {
      this.http.get(apiURL, this.authService.isAuthenticated().value ? this._httpOptions : undefined).subscribe(
        value => {
          this._pagesCount = Math.ceil(value['articlesCount']/this._pageLimit);
          resolve(value['articles'] as Article[]);
        },
        error => {
          reject(error)
        }
      )
    })
  }

  getFeed(page: number): Promise<Article[]> {
    let offset = (page - 1) * this.pageLimit;
    let apiURL = this._serverURL + '/api/articles/feed?limit=' + this.pageLimit;
    if (offset > 0) apiURL += ('&offset=' + offset);
    return new Promise((resolve, reject) => {
      this.http.get(apiURL, this._httpOptions).subscribe(
        value => {
          this._pagesCount = Math.ceil(value['articlesCount']/this._pageLimit);
          resolve(value['articles'] as Article[]);
        },
        error => {
          reject(error);
        }
      )
    })
  }
}
