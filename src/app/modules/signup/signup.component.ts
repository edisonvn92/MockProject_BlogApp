import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mustMatchValidator } from '../../utilities/validator/must-match.directive';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { UserAuthenticationService } from '../../services/users/user-authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: Object;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserAuthenticationService
  ) { }

  signUpForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
  }, {
    validators: [mustMatchValidator('password', 'confirmPassword')]
  })
  errorMessages = [];

  get username() {
    return this.signUpForm.get('username');
  }
  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.createNewUser(this.signUpForm.value).subscribe(
      data => this.router.navigate(['/home']),
      error => {
        this.error = error;
      }
    );

  }

}
