import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeather(): Observable<Weather> {
    return this.httpClient.get<Weather>('https://api.openweathermap.org/data/2.5/weather?q=Munich,DE&units=metric');
  }
}
