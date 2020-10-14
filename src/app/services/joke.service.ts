// TODO Vlad: Umgehen des Interceptors mittels HttpBackend ok?

import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
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

  // tslint:disable-next-line:typedef
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
