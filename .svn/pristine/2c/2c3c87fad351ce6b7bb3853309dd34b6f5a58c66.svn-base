import { Injectable } from '@angular/core';
import { Profile } from '../../classes/profile';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserAuthenticationService } from '../users/user-authentication.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProfileService {
  private _serverURL = 'https://conduit.productionready.io';
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('token'),
    })
  };
  private _selectedProfile = new Profile;
  constructor(
    private http: HttpClient,
    private authService: UserAuthenticationService
  ) { }

  getProfile(username: string): Promise<Profile> {
    return new Promise((resolve, reject) => {
      this.http.get(this._serverURL + '/api/profiles/' + username, this.authService.isAuthenticated().value ? this._httpOptions : undefined)
        .subscribe(
          data => {
            this._selectedProfile = data['profile']
            resolve(data['profile'])
          },
          error => {
            reject(error);
          }
        )

    })
  }
  setClickedProfile(profile: Profile) {
    this._selectedProfile = profile;
  }

  getClickedProfile(): BehaviorSubject<Profile> {
    return new BehaviorSubject(this._selectedProfile);
  }

  followProfile(username: string): Promise<Profile> {
    return new Promise((resolve, reject) => {
      this.http.post(this._serverURL + '/api/profiles/' + username + '/follow', true, this._httpOptions).subscribe(
        data => {
          this._selectedProfile = data['profile'];
          resolve(data['profile']);
        },
        error => {
          reject(error);
        }
      )
    })
  }

  unfollowProfile(username: string): Promise<Profile> {
    return new Promise((resolve, reject) => {
      this.http.delete(this._serverURL + '/api/profiles/' + username + '/follow', this._httpOptions).subscribe(
        data => {
          this._selectedProfile = data['profile'];
          resolve(data['profile']);
        }
      ),
        error => {
          reject(error);
        }
    })
  }

}
