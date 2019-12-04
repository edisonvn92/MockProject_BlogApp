import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/services/users/user-authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: UserAuthenticationService
  ) {

   }

  ngOnInit() {
    
  }

  get currentUsername() {
    return this.authService.getCurrentUsername();
  }

  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
