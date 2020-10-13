import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Joke} from '../joke';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getJoke(): Observable<string> {
    return this.http.get<Joke>('https://api.chucknorris.io/jokes/random')
      .pipe(
        tap(console.log),
        map(result => {
          return result.value;
        }),
        tap(console.log));
  }
}
