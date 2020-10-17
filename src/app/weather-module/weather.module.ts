import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './components/weather/weather.component';
import { TemperaturePipe } from './temperature.pipe';
import { WeatherRoutingModule } from './weather-routing.module';



@NgModule({
  declarations: [
    WeatherComponent,
    TemperaturePipe
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }
