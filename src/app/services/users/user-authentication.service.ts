import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber, of } from 'rxjs';
import { User } from 'src/app/classes/user';
import { map, tap, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  private _currentUser = new User;
  private _serverURL = 'https://conduit.productionready.io';

  constructor(
    private http: HttpClient,
  ) { }
  //check expiration and if token is still existing or not
  isAuthenticated(): BehaviorSubject<boolean> {
    return new BehaviorSubject(this.getToken() != null && !this.isTokenExpired());
  }

  getToken() {
    return localStorage.getItem('token');
  }


  private isTokenExpired(): boolean {
    return false;
  }

  getCurrentUser(): Observable<User> {
    if (this._currentUser.username) {
      return of(this._currentUser);
    } else {
      return this.http.get(this._serverURL + '/api/user').pipe(
        map(data => data['user'] as User),
        tap(data => {
          this._currentUser = data;
          this._currentUser.password = localStorage.getItem('password');
        })

      );
    }
  }


  getCurrentUsername(): string {
    return this._currentUser.username;
  }
  getCurrentUserImage(): string {
    return this._currentUser.image;
  }

  signin(input: { email: string, password: string }): Observable<User> {
    return this.http.post(this._serverURL + '/api/users/login', { 'user': input }).pipe(
      map(data => data['user'] as User),
      tap(data => {
        this._currentUser = data;
        localStorage.setItem('token', data['token']);
      })
    );
  }

  signout() {
    this._currentUser = new User;
    localStorage.clear();
  }

  createNewUser(newUser: User): Observable<User> {
    return this.http.post(this._serverURL + '/api/users/', { 'user': newUser }).pipe(
      map(data => data['user'] as User),
      tap(data => {
          this.signin({email: newUser.email, password: newUser.password}).subscribe()
        }) 
      )
  }

  updateUser(updatedUser: User): Observable<User> {
    return this.http.put(this._serverURL + '/api/user', { 'user': updatedUser }).pipe(
      map(data => data['user']),
      tap(data => this._currentUser = data)
    );
  }
}
