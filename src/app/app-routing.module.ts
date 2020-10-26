import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { JokeComponent } from './joke-module/components/joke/joke.component';
import { LoginComponent } from "./components/login/login.component";

import { AuthService } from "./services/auth.service";
import { RegistrationComponent } from "./components/registration/registration.component";



// add components as objects in the routes array
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'jokes', component: JokeComponent },
      {
        path: 'weather',
        loadChildren: () => import('./weather-module/weather.module').then(m => m.WeatherModule)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule {}
