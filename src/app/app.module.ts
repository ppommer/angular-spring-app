// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JokeComponent } from './components/joke/joke.component';

// Pipes
import { InterceptorModule } from './interceptor/interceptor.module';



@NgModule({
  // declaration of components/directives/pipes to be used in this module
  declarations: [
    AppComponent,
    HomeComponent,
    JokeComponent
  ],
  // import of external modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    InterceptorModule
  ],
  // export of components/directives/pipes to be used in another module
  exports: [],
  // injectables required for the module
  providers: [],
  // application's root component
  bootstrap: [AppComponent]
})
export class AppModule { }
