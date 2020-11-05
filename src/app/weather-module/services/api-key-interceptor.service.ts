import {
  HttpEvent,
  HttpHandler, HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

// import { mergeMap } from 'rxjs/operators';


@Injectable()
export class ApiKeyInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    /** Version 1: Get appId from backend and append it to OpenWeatherMap API call */
    // if (!req.url.includes('api.openweathermap.org')) {
    //   return next.handle(req);
    // }
    //
    // let authRequest: AuthRequest;
    //
    // authRequest = {
    //   id: this.authService.activeUserId,
    //   username: this.authService.activeUserUsername
    // };
    //
    // return this.authService.getAppId(authRequest).pipe(mergeMap(data => {
    //   if (data.appId) {
    //     const newReq = req.clone({
    //       url: req.url + `&appid=${data.appId}`
    //     });
    //     return next.handle(newReq);
    //   } else {
    //     console.log('NO CREDIT!');
    //     return next.handle(req);
    //   }
    // }));

    /** Version 2: Append UUID to original backend API call and let backend execute the OpenWeatherMap API call */
    if (!req.url.includes('http://localhost:8080/api/weather')) {
      return next.handle(req);
    }

    const newHeaders = new HttpHeaders()
      // .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.authService.activeUserId}`);

    const newReq = req.clone({
      headers: newHeaders
    });
    return next.handle(newReq);
  }

}
