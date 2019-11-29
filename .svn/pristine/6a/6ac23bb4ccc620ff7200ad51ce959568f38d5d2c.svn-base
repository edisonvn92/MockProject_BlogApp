import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModifyService } from '../../services/users/user-modify.service';

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
    private userService: UserModifyService
  ) { }

  signUpForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
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

  ngOnInit() {
  }

  onSubmit() {
    this.errorMessages = [];
    this.userService.createNewUser(this.signUpForm.value).then(
      value => {
        this.router.navigate(['/home']);
      },
      error => {
        this.error = error;

      }
    )
  }

}
