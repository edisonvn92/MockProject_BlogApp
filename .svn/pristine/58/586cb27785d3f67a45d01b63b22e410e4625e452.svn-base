import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserAuthenticationService } from '../users/user-authentication.service';
import { Comment } from '../../classes/comment';

@Injectable()
export class CommentService {
  private _serverURL = 'https://conduit.productionready.io';
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token'),
    })
  };
  private _currentSlug = '';
  private _commentList: Comment[] = [];
  constructor(
    private http: HttpClient,
    private authService: UserAuthenticationService
  ) { }

  loadCommentsList(slug: string): Promise<Comment[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this._serverURL + '/api/articles/' + slug + '/comments', this.authService.isAuthenticated().value ? this._httpOptions : undefined).subscribe(
        value => {
          this._currentSlug = slug;
          this._commentList = value['comments'];
          resolve(this._commentList);
        },
        error => {
          reject(error)
        }
      )
    });
  }

  getCommentList(): BehaviorSubject<Comment[]> {
    return new BehaviorSubject(this._commentList);
  }

  addComment(body: string): Promise<Comment> {
    return new Promise((resolve, reject) => {
      this.http.post(this._serverURL + '/api/articles/' + this._currentSlug + '/comments', {"comment": {"body": body}}, this._httpOptions).subscribe(
        value => {
          this._commentList.unshift(value['comment']);
          resolve(value['comment']);
        },
        error => {
          reject(error)
        }
      )
    })
  }

  deleteComment(id: string, index: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(this._serverURL + '/api/articles/' + this._currentSlug + '/comments/' + id, this._httpOptions).subscribe(
        value => {
          this._commentList.splice(index, 1);
          resolve(value);
        },
        error => {
          reject(error['error']['errors']);
        }
      )
    })
  }

  isOwner(comment: Comment) {
    return comment.author.username==this.authService.getCurrentUsername();
  }
}
