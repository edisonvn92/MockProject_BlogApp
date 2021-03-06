import { Injectable } from '@angular/core';
import { Profile } from '../../classes/profile';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class ProfileService {
  private _serverURL = 'https://conduit.productionready.io';

  private _selectedProfile = new Profile;
  constructor(
    private http: HttpClient
  ) { }

  getProfile(username: string): Observable<Profile> {
    return this.http.get(this._serverURL + '/api/profiles/' + username).pipe(
      map(data => data['profile'] as Profile),
      tap(data => this._selectedProfile = data)
    )

  }
  setClickedProfile(profile: Profile) {
    this._selectedProfile = profile;
  }

  getClickedProfile(): BehaviorSubject<Profile> {
    return new BehaviorSubject(this._selectedProfile);
  }

  followProfile(username: string): void {
    this.http.post(this._serverURL + '/api/profiles/' + username + '/follow', true).pipe(
      map(data => data['profile']),
      tap(data => this._selectedProfile = data)
    ).subscribe();
  }

  unfollowProfile(username: string): void {
    this.http.delete(this._serverURL + '/api/profiles/' + username + '/follow').pipe(
      map(data => data['profile']),
      tap(data => this._selectedProfile = data)
    ).subscribe();
  }


}
