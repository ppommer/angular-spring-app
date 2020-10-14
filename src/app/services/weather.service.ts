// TODO Vlad: Mehrere Daten auf einmal

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../weather';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeather(): Observable<string> {
    return this.httpClient.get<Weather>('https://api.openweathermap.org/data/2.5/weather?q=Munich,DE&units=metric').pipe(
      map(result => {
        return result.name
      })
        // return [result.weather.name, result.weather.description, result.main.temp, result.main.feels_like, result.main.humidity]
    );
  }
}
