// https://openweathermap.org/current

import { fetchData } from './api';
import {
  Clouds,
  Coord,
  Weather,
  System,
  WeatherCondition,
  Wind,
} from './types';

type CurrentWeatherResponse = {
  coord: Coord;
  weather: WeatherCondition[];
  base: string;
  main: Weather;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: System;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sampleResponse: CurrentWeatherResponse = {
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: [
    {
      id: 500,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d',
    },
  ],
  base: 'stations',
  main: {
    temp: 299.39,
    feels_like: 299.39,
    temp_min: 299.39,
    temp_max: 299.39,
    pressure: 1008,
    humidity: 82,
    sea_level: 1008,
    grnd_level: 1008,
  },
  visibility: 10000,
  wind: {
    speed: 4.4,
    deg: 159,
    gust: 4.1,
  },
  clouds: {
    all: 44,
  },
  dt: 1730821014,
  sys: {
    sunrise: 1730785208,
    sunset: 1730828823,
  },
  timezone: 0,
  id: 6295630,
  name: 'Globe',
  cod: 200,
};

export async function fetchCurrent(city: string | number) {
  return fetchData<CurrentWeatherResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}`,
  );
}
