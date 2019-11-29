import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from 'src/app/classes/article';
import { Injectable } from '@angular/core';
import { UserAuthenticationService } from '../users/user-authentication.service';

@Injectable()

export class ArticleModifyService {
  
  private _currentUsername = this.authService.getCurrentUsername();
  private _serverURL = 'https://conduit.productionready.io';
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token'),
    })
  };
  constructor(
    private http: HttpClient,
    private authService: UserAuthenticationService
  ) { }
  createArticle(newArticle): Promise<Article> {
    return new Promise((resolve, reject) => {
      this.http.post(this._serverURL + '/api/articles', {'article': newArticle}, this._httpOptions).subscribe(
        data => {
          resolve(data['article']);
        },
        error => {
          reject(error['error']['errors']);
        }
      )
    });
  }

  updateArticle(updatedArticle ,slug: string): Promise<Article> {
    return new Promise((resolve, reject) => {
      this.http.put(this._serverURL + '/api/articles/' + slug, {'article': updatedArticle}, this._httpOptions).subscribe(
        data => {
          resolve(data['article']);
        },
        error => {
          reject(error['error']['errors']);
        }
      )
    });
  }

  deleteArticle() {
    
  }

}
