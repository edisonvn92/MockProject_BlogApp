import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthenticationService } from '../../services/users/user-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedGuardGuard implements CanActivate {
  constructor(
    private _authService: UserAuthenticationService,
    private _router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!(this._authService.isAuthenticated().value)) {
        return true;
      }
      this._router.navigate(['/home']);
      return false;
  }
  
}
