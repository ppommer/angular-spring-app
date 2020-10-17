import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Joke } from '../joke';
import { JokeService } from './joke.service';

describe('JokeService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let jokeService: JokeService;

  const dummyJoke: Joke = {
    icon_url: 'http://icon-url-test.com/',
    url: 'http://url-test.com/',
    value: 'ChuckNorrisJoke'
  };

  beforeEach(() => {
    // Configure testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        JokeService
      ]
    });
    // Instantiate HttpClient, HttpTestingController and JokeService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    jokeService = TestBed.inject(JokeService);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifies that no requests are outstanding
  })

  it('should return expected joke by calling once', async (done) => {
    jokeService.getJoke().subscribe(data => {
      expect(data).toEqual(dummyJoke.value);
      done();
    });
    const req = httpTestingController.expectOne('https://api.chucknorris.io/jokes/random');
    expect(req.request.method).toEqual('GET');
    req.flush(dummyJoke); // Return dummyJoke
  });
});
