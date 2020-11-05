import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../Weather';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeather(): Observable<Weather> {
    /** Version 1: OpenWeatherMap API call (interceptor fetches appId from backend and appends it to URL) */
    // return this.httpClient.get<Weather>('https://api.openweathermap.org/data/2.5/weather?q=Munich,DE&units=metric');

    /** Version 2: Backend API call (backend executes OpenWeatherMap API call and returns weather object -> appId hidden) */
    const url = 'http://localhost:8080/api/weather';

    return this.httpClient.get<Weather>(url);
  }

}
