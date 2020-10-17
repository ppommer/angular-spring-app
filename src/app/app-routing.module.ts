import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JokeComponent } from './joke-module/components/joke/joke.component';


// add components as objects in the routes array
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'joke', component: JokeComponent },
  {
    path: 'weather',
    loadChildren: () => import('./weather-module/weather.module').then(m => m.WeatherModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
