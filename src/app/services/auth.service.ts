import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/User';
import { AddRequest } from '../model/AddRequest';
import { AddResponse } from '../model/AddResponse';
import { AuthResponse } from '../model/AuthResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  activeUserId = "";

  constructor(
    private httpClient: HttpClient) {}

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  register(addRequest: AddRequest): Observable<AddResponse> {

    const url = 'http://localhost:8080/api/user';
    const body = JSON.stringify(addRequest);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post<AddResponse>(url, body, { 'headers': headers });
  }

  login(user: User): Observable<AuthResponse> {

    const url = 'http://localhost:8080/api/auth';
    const body = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post<AuthResponse>(url, body, { 'headers': headers });
  }

  /** Version 1: OpenWeatherMap API call (interceptor fetches appId from backend and appends it to URL */
  // getAppId(authRequest: AuthRequest): Observable<AuthResponse> {
  //
  //   console.log("authService.getAppId()");
  //
  //   const url = 'http://localhost:8080/api/weather';
  //   const body = JSON.stringify(authRequest);
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //
  //   return this.httpClient.post<AuthResponse>(url, body, { 'headers': headers });
  // }

}
