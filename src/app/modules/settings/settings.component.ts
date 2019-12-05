import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/services/users/user-authentication.service';
import { mustMatchValidator } from '../../utilities/validator/must-match.directive';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // currentUser = new User;
  // error: Object;
  // constructor(
  //   private authService: UserAuthenticationService,
  //   private userService: UserModifyService,
  //   private router: Router,
  // ) { }


  // ngOnInit() {
  //   this.authService.getCurrentUser().subscribe(
  //     user => {
  //       this.currentUser = user;
  //     });
  // }
  // updateUser(updatedUser: User) {
  //   this.userService.updateUser(updatedUser).subscribe(
  //     user => this.router.navigate(['']),
  //     error => this.error = error
  //   )
  // }
  // signOut() {
  //   this.authService.signout();
  //   this.router.navigate(['']);
  // }
  currentUser = new User;
  error: Object;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: UserAuthenticationService,
  ) { }

  settingsForm = this.fb.group({
    username: [this.currentUser.username, [Validators.required]],
    email: [this.currentUser.email, [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(8)]],
    confirmPassword: ['', [Validators.minLength(8)]],
    image: [this.currentUser.image],
    bio: [this.currentUser.bio]
  }, {
      validators: [mustMatchValidator('password', 'confirmPassword')]
    })
  errorMessages = [];

  get username() {
    return this.settingsForm.get('username');
  }
  get email() {
    return this.settingsForm.get('email');
  }
  get image() {
    return this.settingsForm.get('image');
  }
  get bio() {
    return this.settingsForm.get('bio');
  }

  get password() {
    return this.settingsForm.get('password');
  }
  get confirmPassword() {
    return this.settingsForm.get('confirmPassword');
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      user => {
        this.username.setValue(user.username);
        this.email.setValue(user.email);
        this.image.setValue(user.image);
        this.bio.setValue(user.bio);
      });
  }

  updateUser() {
    this.currentUser = {
      username: this.username.value,
      email: this.email.value,
      image: this.image.value,
      bio: this.bio.value
    };
    if (this.password.value !='') {
      this.currentUser.password = this.password.value;
    }
    this.authService.updateUser(this.currentUser).subscribe(
      user => this.router.navigate(['']),
      error => this.error = error
    )
  }

  signOut() {
    this.authService.signout();
    this.router.navigate(['']);
  }
}
