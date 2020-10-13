// TODO Vlad:
//  Cannot read property 'getJoke' of undefined

import { TestBed, inject } from '@angular/core/testing';
import { HttpService } from './http.service';
import { Joke } from '../joke';
import { of } from 'rxjs';

describe('HttpService', () => {

  let service: HttpService;
  let httpServiceMock: any;

  const dummyJoke: Joke[] = [{
    icon_url: 'http://icon-url-test.com/',
    url: 'http://url-test.com/',
    value: 'ChuckNorrisJoke'
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpService,
          useValue: httpServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    httpServiceMock = {
      getJoke: jest.fn()
    };
    httpServiceMock.getJoke.mockReturnValue(of(dummyJoke));
  });

  it('should be created', () => {
    expect(httpServiceMock).toBeTruthy();
  });

  it('should retrieve posts from the API via getJoke', () => {
    service.getJoke().subscribe( data => {
      expect(data.length).toBe(1);
      expect(httpServiceMock.getJoke.toHaveBeenCalledWith(of(dummyJoke)));
      expect(data).toBe(dummyJoke[0].value);
    });
  });
});
