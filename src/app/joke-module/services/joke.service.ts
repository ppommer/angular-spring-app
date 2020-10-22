import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Joke } from '../joke';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private httpClient: HttpClient;

  private _jokes = [];
  private _jokeCounter = 0;

  // Inject backend to circumvent interceptor
  constructor(private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  getJoke(): Observable<string> {
    return this.httpClient.get<Joke>('https://api.chucknorris.io/jokes/random')
      .pipe(
        map(result => {
          return result.value;
        })
      )
  }

  getJokes(): any[] {
    return this._jokes;
  }

  getJokeCounter(): number {
    return this._jokeCounter;
  }

  setJokes(value: any[]) {
    this._jokes = value;
  }

  setJokeCounter(value: number) {
    this._jokeCounter = value;
  }
}
