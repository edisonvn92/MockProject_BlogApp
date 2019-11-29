import { Component, OnInit } from '@angular/core';
import { Profile } from '../../classes/profile';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/services/users/user-authentication.service';
import { ArticlesListService } from '../../services/articles/articles-list.service';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  currentUsername: string;
  followed: boolean = false;
  profile = new Profile;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: UserAuthenticationService,
    private profileService: ProfileService,
    private articleListService: ArticlesListService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['value'];
      this.articleListService.setFilter(params['filter']);
      this.profileService.getProfile(this.username).then(value => {
        this.profile = value;
        this.currentUsername = this.authService.getCurrentUsername();
        this.followed = this.profile.following;
      },
        error => {
          console.log(error)
          this.router.navigate(['/home']);
        });
    })

  }

  authorFilter() {
    this.articleListService.setFilter('author');
    this.router.navigate(['/profile', this.username])
  }

  favoritedFilter() {
    this.articleListService.setFilter('favorited');
    this.router.navigate(['/profile', this.username])
  }

  toggleFollowing(following: boolean) {
    if (!following) {
      this.profileService.followProfile(this.profile.username).then(
        value => {
         this.profile = value;
        }, error => {
          console.log(error);
          this.router.navigate(['/signup'])
        }
      )
    } else {
     this.profileService.unfollowProfile(this.profile.username).then(
       value => {
        this.profile = value;
       }, error => {
         console.log(error);
         this.router.navigate(['/signup'])
       }
     )
    }
   }

}
