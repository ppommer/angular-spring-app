import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const id = 'a0191a5d64339913c4c10d7fea9774ba';
export const appid = `&appid=${ id }`;

@Injectable()
export class ApiKeyInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    /** Not needed as joke-service runs as HttpBackend */
    // if (!req.url.includes('openweather')) {
    //   return next.handle(req);
    // }

    const newReq = req.clone({
      url: req.url + appid,
    });
    return next.handle(newReq);
  }
}
