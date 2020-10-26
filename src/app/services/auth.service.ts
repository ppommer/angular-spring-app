import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/User";
import { Observable } from "rxjs";
import { AuthResponse } from "../model/AuthResponse";
import { AddResponse } from "../model/AddResponse";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  constructor(private httpClient: HttpClient) {}

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(user: User): Observable<AuthResponse> {

    const url = 'http://localhost:8080/api/auth';
    const body=JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post<AuthResponse>(url, body, {'headers':headers});
  }

  register(user: User): Observable<AddResponse> {

    const url = 'http://localhost:8080/api/user'
    const body=JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this.httpClient.post<AddResponse>(url, body, {'headers':headers});
  }

}
