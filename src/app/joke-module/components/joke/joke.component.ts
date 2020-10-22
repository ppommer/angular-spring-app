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

  // JokeService as constructor tells injector to inject JokeService
  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    if (this.jokeService.getJokes().length == 0) {
      this.newJoke();
    } else {
      this.jokes = this.jokeService.getJokes();
      this.jokeCounter = this.jokeService.getJokeCounter();
    }
  }

  newJoke() {
    this.jokeService.getJoke().subscribe(data => {
      this.jokes.push(data);
      this.jokeCounter = this.jokes.length;
      this.jokeService.setJokes(this.jokes);
      this.jokeService.setJokeCounter(this.jokeCounter);
    })
  }

  nextJoke() {
    if (this.jokeCounter < this.jokes.length) {
      this.jokeCounter++;
      this.jokeService.setJokeCounter(this.jokeCounter);
    }
  }

  previousJoke() {
    if (this.jokeCounter - 1 > 0) {
      this.jokeCounter--;
      this.jokeService.setJokeCounter(this.jokeCounter);
    }
  }
}
