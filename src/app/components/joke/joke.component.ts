import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../services/joke.service';

// Decorator adds metadata (e.g. pointer to template)
@Component({
  selector: 'app-list',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})


export class JokeComponent implements OnInit {

  joke = '';

  // JokeService as constructor tells injector to inject JokeService
  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.newJoke();
  }

  newJoke() {
    this.jokeService.getJoke().subscribe(data => {
      this.joke = data;
    });
  }
}
