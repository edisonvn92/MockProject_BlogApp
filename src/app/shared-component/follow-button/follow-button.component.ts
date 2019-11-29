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
  @Input() profile: Profile = new Profile;
  constructor(
    private router: Router,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
   
  }
  followUser() {
    this.profileService.followProfile(this.profile.username).then(
      value => {
       this.profile = this.profileService.getClickedProfile().getValue();
      }, error => {
        console.log(error);
        this.router.navigate(['/signup'])
      }
    )
  }
  
  unfollowUser() {
    this.profileService.unfollowProfile(this.profile.username).then(
      value => {
        this.profile = this.profileService.getClickedProfile().getValue();
      }, error => {
        console.log(error);
        this.router.navigate(['/signup'])
      }
    )
  }
  

}
