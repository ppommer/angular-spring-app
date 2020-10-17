// TODO Vlad:
//  Check: next/prev
//  Frage: Array speichern auch bei Seitenwechsel

import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../services/joke.service';

// Decorator adds metadata (e.g. pointer to template)
@Component({
  selector: 'app-list',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})


export class JokeComponent implements OnInit {

  jokes = [];
  jokeCounter = 0;
  maxJoke = 0;

  // JokeService as constructor tells injector to inject JokeService
  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.newJoke();
  }

  newJoke() {
    this.jokeService.getJoke().subscribe(data => {
      this.jokes.push(data);
      this.maxJoke++;
      this.jokeCounter = this.maxJoke;
    });
  }

  nextJoke() {
    if (this.jokeCounter < this.maxJoke) {
      this.jokeCounter++;
    }
  }

  previousJoke() {
    if (this.jokeCounter - 1 > 0) {
      this.jokeCounter--;
    }
  }
}
