import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthenticationService } from '../../services/users/user-authentication.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public static currentTeamId : any;
  constructor(public authService: UserAuthenticationService) {
   }

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let requestOption:any = {};
     
    if(this.authService.isAuthenticated().getValue()) {
      
      requestOption.setHeaders = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.authService.getToken()}`
      }
    } 

    // Clone the request and set the new header in one step.
    request = request.clone(requestOption); 
    return next.handle(request)
  }
}