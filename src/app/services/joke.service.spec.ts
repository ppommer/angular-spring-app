import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Joke } from '../joke';
import { JokeService } from './joke.service';


describe('JokeService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let jokeService: JokeService;

  let joke = '';
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

  it('should return expected joke by calling once', () => {
    jokeService.getJoke().subscribe(data => {
      joke = data;
    });
    httpTestingController.expectOne('https://api.chucknorris.io/jokes/random').flush(dummyJoke);
    expect(joke).toEqual(dummyJoke.value);

    // const req = httpTestingController.expectOne('https://api.chucknorris.io/jokes/random');
    // expect(req.request.method).toEqual('GET');
    // req.flush(dummyJoke); // Return dummyJoke
  });
});
