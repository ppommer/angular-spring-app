import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './components/weather/weather.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiKeyInterceptorService } from './services/api-key-interceptor.service';
import { TemperaturePipe } from './temperature.pipe';



@NgModule({
  declarations: [
    WeatherComponent,
    TemperaturePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptorService,
      multi: true
    }
  ]
})
export class InterceptorModule { }
