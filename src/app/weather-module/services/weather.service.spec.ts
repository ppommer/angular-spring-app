import { WeatherService } from './weather.service';
import { of } from 'rxjs';
import { Weather } from '../weather';

const dummyWeather: Weather = {
  name: 'New York',
  weather: [{ description: 'cloudy' }],
  main: { temp: 30, feels_like: 40, humidity: 50 }
};

describe('WeatherService', () => {

  let weatherService: WeatherService;
  let httpClientMock: any;

  httpClientMock =  {
    get: jest.fn(() => of(dummyWeather))
  };

  beforeEach(() => {
    weatherService = new WeatherService(httpClientMock as any);
  });

  it('should return expected weather data', async(done) => {
    weatherService.getWeather().subscribe(data => {
      expect(httpClientMock.get).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/weather?q=Munich,DE&units=metric');
      expect(data).toBe(dummyWeather);
      done();
    })
  })
});
