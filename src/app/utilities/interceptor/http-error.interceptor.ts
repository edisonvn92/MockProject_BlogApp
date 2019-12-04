import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UserAuthenticationService } from '../../services/users/user-authentication.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
        private authService: UserAuthenticationService,
        private router: Router
    ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return <any> next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log('catched')
                let errorMessage: any;
                if (error.error instanceof ErrorEvent) {
                    //client-side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    if (error.status === 401) {
                        this.router.navigate(['/signup']);
                        return new Observable()
                    } else if (error.status === 422) {
                        errorMessage = error.error['errors'];
                    }
                    else {
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                        this.router.navigate(['/home/global'])
                    }
                    
                }
                return throwError(errorMessage);
            })
        )

    }
}