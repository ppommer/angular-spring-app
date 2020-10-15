import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokeComponent } from './joke.component';
import { JokeService } from '../../services/joke.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

// f = force, x = exclude
fdescribe('ListComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;

  let httpServiceMock: any;
  const expectedStringData = 'expected-data'; // mocked API return

  // Initialize httpService mock and initialize mock function (jest)
  httpServiceMock = {
    getJoke: jest.fn(() => of(expectedStringData))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Tested components
      declarations: [JokeComponent],
      // Dependencies
      providers: [
        {
          // Required dependency
          provide: JokeService,
          // Substitute (mock)
          useValue: httpServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
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
