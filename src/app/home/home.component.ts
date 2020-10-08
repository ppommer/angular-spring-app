import {Component, OnInit} from '@angular/core';

interface Classes {
  active: boolean;
  notactive: boolean;
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

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  plusClick(x) {
    if (x === 1) {
      this.clickCounter1 += 1;
    } else if (x === 2) {
      this.clickCounter2 += 1;
    }
  }

  // tslint:disable-next-line:typedef
  minusClick(x) {
    if (x === 1) {
      if (this.clickCounter1 > 0) {
        this.clickCounter1 -= 1;
      }
    } else if (x === 2) {
      if (this.clickCounter2 > 0) {
        this.clickCounter2 -= 1;
      }
    }
  }

  setClasses(): Classes {
    return {
      active: this.clickCounter1 + this.clickCounter2 > 10,
      notactive: this.clickCounter1 + this.clickCounter2 <= 10
    };
  }

  onKeyUp(event: KeyboardEvent): void {
    const elem = event.target as HTMLInputElement;
    this.name = elem.value;
  }

}
