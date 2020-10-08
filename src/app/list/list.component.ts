import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  joke = '';

  constructor(private http: HttpService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.newJoke();
  }

  // tslint:disable-next-line:typedef
  newJoke() {
    this.http.getJoke().subscribe(data => {
        this.joke = data;
      }
    );
  }
}
