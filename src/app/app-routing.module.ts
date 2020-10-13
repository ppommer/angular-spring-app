import {Input, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';

// add components as objects in the routes array
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
