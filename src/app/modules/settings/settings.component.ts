import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/services/users/user-authentication.service';
import { UserModifyService } from '../../services/users/user-modify.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  currentUser = new User;
  userSettings: FormGroup;
  error: Object;
  constructor(
    private authService: UserAuthenticationService,
    private userService: UserModifyService,
    private router: Router,
  ) {}
  

  ngOnInit() {
    this.authService.getCurrentUser().then(
      user => {
        this.currentUser = user;
      }, 
    error => {
      console.log(error)
    })
  }
  updateUser(updatedUser: User) {
    this.userService.updateUser(updatedUser).then(
      user => {
        this.router.navigate(['']);
      },
      error => {
        this.error = error;
      }
    )
  }
  signOut() {
    this.authService.signout();
    this.router.navigate(['']);
  }
}
