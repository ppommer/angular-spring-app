import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './components/joke/joke.component';



@NgModule({
  declarations: [
    JokeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JokeComponent
  ]
})
export class JokeModule { }
