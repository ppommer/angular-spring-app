import { Component, OnInit } from '@angular/core';

// enum Counters {
//   FIRST_COUNTER = 'FIRST_COUNTER',
//   SECOND_COUNTER = 'SECOND_COUNTER'
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // clickCounter1 = 0;
  // clickCounter2 = 0;
  name = '';

  // FIRST_COUNTER = Counters.FIRST_COUNTER;
  // SECOND_COUNTER = Counters.SECOND_COUNTER;

  constructor() {
  }

  ngOnInit(): void {
  }

  // plusClick(counter: Counters) {
  //   switch (counter) {
  //     case Counters.FIRST_COUNTER: {
  //       this.clickCounter1++;
  //       break;
  //     }
  //     case Counters.SECOND_COUNTER: {
  //       this.clickCounter2++;
  //       break;
  //     }
  //   }
  // }
  //
  // minusClick(counter: Counters) {
  //   switch (counter) {
  //     case Counters.FIRST_COUNTER: {
  //       if (this.clickCounter1 > 0) {
  //         this.clickCounter1--;
  //       }
  //       break;
  //     }
  //     case Counters.SECOND_COUNTER: {
  //       if (this.clickCounter2 > 0) {
  //         this.clickCounter2--;
  //       }
  //       break;
  //     }
  //   }
  // }

  active(): boolean {
    return this.name != '';
  }

  onKeyUp(value: string): void {
    this.name = value;
  }
}
