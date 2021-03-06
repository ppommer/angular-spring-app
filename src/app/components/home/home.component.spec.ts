import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

/**
 * Arrange
 * Act
 * Assert
 */

describe('HomeComponent', () => {

  // Arrange
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // HTML observation
  let debugElement: DebugElement; // get the content of an HTML tag

  enum Counters {
    FIRST_COUNTER = 'FIRST_COUNTER',
    SECOND_COUNTER = 'SECOND_COUNTER'
  }

  // Everything asynchronous is called by the change detection
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /** Unit Tests */
  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it('should increment clickCounter by one on plusClick()', () => {
    component.plusClick(Counters.FIRST_COUNTER);
    component.plusClick(Counters.SECOND_COUNTER);
    expect(component.clickCounter1).toBe(1);
    expect(component.clickCounter2).toBe(1);
  });

  it('should decrement clickCounter by one (until zero) on minusClick()', () => {
    // Increment up to clickCounter == 2 and decrement by one
    component.plusClick(Counters.FIRST_COUNTER);
    component.plusClick(Counters.FIRST_COUNTER);
    component.minusClick(Counters.FIRST_COUNTER);
    expect(component.clickCounter1).toBe(1);

    component.plusClick(Counters.SECOND_COUNTER);
    component.plusClick(Counters.SECOND_COUNTER);
    component.minusClick(Counters.SECOND_COUNTER);
    expect(component.clickCounter2).toBe(1);

    // Decrement clickCounter by two and test if it stops at zero
    component.minusClick(Counters.FIRST_COUNTER);
    component.minusClick(Counters.FIRST_COUNTER);
    expect(component.clickCounter1).toBe(0);

    component.minusClick(Counters.SECOND_COUNTER);
    component.minusClick(Counters.SECOND_COUNTER);
    expect(component.clickCounter2).toBe(0);
  });

  it('should change CSS format when clickCounter1 + clickCounter2 exceeds a value of 10', () => {
    // CSS class 'inactive' when clickCounter1 + clickCounter2 <= 10
    component.clickCounter1 = 0;
    component.clickCounter2 = 0;
    expect(component.active()).toBe(false);

    // CSS class 'active' when clickCounter1 + clickCounter2 > 10
    component.clickCounter1 = 6;
    component.clickCounter2 = 6;
    expect(component.active()).toBe(true);
  });

  it('should assign \'value\' to \'name\'', () => {
    component.onKeyUp('test-test');
    expect(component.name).toBe('test-test');
  });

  /** Integrated Tests */
  // Only works when 'fixture.detectChanges();' is called after component.name is declared!
  it('should say \'Welcome {{ name }}!\' in the heading', () => {
    component.name = 'test-test';
    fixture.detectChanges(); // nur bei integrated testing
    debugElement = fixture.debugElement.query(By.css('h1')).nativeElement.textContent;
    expect(debugElement).toBe('Welcome ' + component.name + '!');
  });
});
