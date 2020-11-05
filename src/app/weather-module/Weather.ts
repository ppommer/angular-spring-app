export interface Description {
  description: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  humidity: number;
}

export interface Weather {
  name: string;
  weather: Description[];
  main: Main;
}
