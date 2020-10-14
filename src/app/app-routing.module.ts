import {Input, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components
import { HomeComponent } from './components/home/home.component';
import { JokeComponent } from './components/joke/joke.component';
import { WeatherComponent } from './components/weather/weather.component';

// add components as objects in the routes array
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'joke', component: JokeComponent },
  { path: 'weather', component: WeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
