import { Profile } from './../../classes/profile';
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {
  @Input('profile') profileInput: Profile = new Profile;
  constructor(
    private router: Router,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
   this.profileService.setClickedProfile(this.profileInput)
  }
  get profile() {
    return this.profileService.getClickedProfile().value;
  }
  followUser() {
    this.profileService.followProfile(this.profile.username);
  }
  
  unfollowUser() {
    this.profileService.unfollowProfile(this.profile.username);
  }
  

}
