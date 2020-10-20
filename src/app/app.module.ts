// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JokeModule } from './joke-module/joke.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApiKeyInterceptorService } from './weather-module/services/api-key-interceptor.service';



@NgModule({
  // declaration of components/directives/pipes to be used in this module
  declarations: [
    AppComponent,
    HomeComponent
  ],
  // import of external modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    JokeModule
  ],
  // export of components/directives/pipes to be used in another module
  exports: [],
  // injectables required for the module
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptorService,
      multi: true
    }
  ],
  // application's root component
  bootstrap: [AppComponent]
})
export class AppModule { }
