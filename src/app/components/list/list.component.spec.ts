// TODO Vlad:
//  Warum fdescribe?
//  Cannot read property 'getJoke' of undefined

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { HttpService } from '../../services/http.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

// f = force, x = exclude
fdescribe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  let httpServiceMock: any;
  const expectedStringData = 'expected-data'; // mocked API return
  // Initialize httpService mock
  httpServiceMock = {
    // Create mock function
    getJoke: jest.fn(() => of(expectedStringData))
  };
  // Set mock function's return value
  // httpServiceMock.getJoke.mockReturnValue(of(expectedStringData));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Tested components
      declarations: [ListComponent],
      // Dependencies
      providers: [
        {
          // Required dependency
          provide: HttpService,
          // Substitute (mock)
          useValue: httpServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init', () => {
    component.ngOnInit();
    expect(httpServiceMock.getJoke).toHaveBeenCalled();
    expect(component.joke).toBe(expectedStringData);
  });

  it('should update joke on newJoke', () => {
    component.newJoke();
    expect(httpServiceMock.getJoke).toHaveBeenCalled();
    expect(component.joke).toBe(expectedStringData);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('h4')).nativeElement.textContent).toBe(expectedStringData);
  });
});
