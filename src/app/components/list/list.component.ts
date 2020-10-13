import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

// Decorator adds metadata (e.g. pointer to template)
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  joke = '';

  // HttpService as constructor tells injector to inject HttpService
  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.newJoke();
  }

  newJoke() {
    this.http.getJoke().subscribe(data => {
      this.joke = data;
    });
  }
}
