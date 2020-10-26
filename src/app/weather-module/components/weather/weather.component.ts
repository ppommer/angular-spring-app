import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.newWeather();
  }

  newWeather() {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data;
    });
  }
}
