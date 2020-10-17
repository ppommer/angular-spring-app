import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import {Joke} from '../joke';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private httpClient: HttpClient;
  constructor(private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  // TODO: Should work with Interceptor in separate module!
  // constructor(private httpClient: HttpClient) { }

  getJoke(): Observable<string> {
    return this.httpClient.get<Joke>('https://api.chucknorris.io/jokes/random')
      .pipe(
        tap(console.log),
        map(result => {
          return result.value;
        }),
        tap(console.log));
  }
}
