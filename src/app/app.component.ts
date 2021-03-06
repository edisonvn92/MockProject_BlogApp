import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from './services/users/user-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'mock-project';
  constructor(
    private authService: UserAuthenticationService
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated().value) {
      this.authService.getCurrentUser().subscribe()
    }
  }
}
