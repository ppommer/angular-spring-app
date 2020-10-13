import {Component, OnInit} from '@angular/core';

interface Classes {
  active: boolean;
  inactive: boolean;
}

enum Counters {
  FIRST_COUNTER = 'FIRST_COUNTER',
  SECOND_COUNTER = 'SECOND_COUNTER'
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter1 = 0;
  clickCounter2 = 0;
  name = '';

  constructor() { }

  ngOnInit(): void { }

  plusClick(counter: Counters) {
    switch(counter) {
      case Counters.FIRST_COUNTER: {
        this.clickCounter1 += 1;
        break;
      }
      case Counters.SECOND_COUNTER: {
        this.clickCounter2 += 1;
        break;
      }
    }
  }

  minusClick(counter: Counters) {
    if (counter === Counters.FIRST_COUNTER) {
      if (this.clickCounter1 > 0) {
        this.clickCounter1 -= 1;
      }
    } else if (counter === Counters.SECOND_COUNTER) {
      if (this.clickCounter2 > 0) {
        this.clickCounter2 -= 1;
      }
    }
  }

  active(): boolean {
    return this.clickCounter1 + this.clickCounter2 > 10;
  }

  onKeyUp(value: string): void {
    this.name = value;
  }
}
