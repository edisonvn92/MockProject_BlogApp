import { Injectable } from '@angular/core';
import { User } from '../../classes/user';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthenticationService } from './user-authentication.service';

@Injectable()
export class UserModifyService {
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

  createNewUser(newUser: User): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.post(this._serverURL + '/api/users/', { 'user': newUser }).subscribe(
        data => {
          this.authService.signin({ email: newUser.email, password: newUser.password }).then(value => {
            resolve(value)
          });
        },
        error => {
          reject(error['error']['errors'])
        }
      )
    });
  }

  updateUser(updatedUser: User): Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.put(this._serverURL + '/api/user', { 'user': updatedUser }, this._httpOptions).subscribe(
        data => {
          resolve(data['user']);
        },
        error => {
          reject(error['error']['errors']);
        }
      )
    })
  }
}
