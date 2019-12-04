import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserAuthenticationService } from 'src/app/services/users/user-authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  error: Object;
  constructor(
    private router: Router,
    private authService: UserAuthenticationService
  ) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
   this.authService.signin(f.value).subscribe(
     value => this.router.navigate(['/home']),
    error => this.error = error);
  }
}
