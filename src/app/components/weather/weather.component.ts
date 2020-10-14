// TODO Vlad: Datentyp zur Verarbeitung der WeatherData

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

enum WeatherData {
  CITY,
  DESCRIPTION,
  TEMPERATURE,
  FEELS_LIKE,
  HUMIDITY
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: string;

  CITY          = WeatherData.CITY;
  DESCRIPTION   = WeatherData.DESCRIPTION;
  TEMPERATURE   = WeatherData.TEMPERATURE;
  FEELS_LIKE    = WeatherData.FEELS_LIKE;
  HUMIDITY      = WeatherData.HUMIDITY;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.newWeather();
  }

  newWeather() {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data;
    })
  }
}
