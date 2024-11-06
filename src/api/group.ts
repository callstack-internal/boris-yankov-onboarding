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

type GroupResponse = {
  cnt: number;
  list: GroupedWeather[];
};

type GroupedWeather = {
  coord: Coord;
  sys: System;
  weather: WeatherCondition[];
  main: Weather;
  visibility: 10000;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  id: number;
  name: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sampleGroupWeather: GroupResponse = {
  cnt: 1,
  list: [
    {
      coord: { lon: 30.5167, lat: 50.4333 },
      sys: {
        country: 'UA',
        timezone: 7200,
        sunrise: 1730782547,
        sunset: 1730816836,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      main: {
        temp: 279.11,
        feels_like: 275.61,
        temp_min: 279.11,
        temp_max: 280.18,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1011,
        humidity: 69,
      },
      visibility: 10000,
      wind: { speed: 5.16, deg: 276 },
      clouds: { all: 90 },
      dt: 1730826549,
      id: 703448,
      name: 'Kyiv',
    },
  ],
};

export async function getGroupWeather(ids: number[]) {
  return fetchData<GroupResponse>(
    `https://api.openweathermap.org/data/2.5/group?id=${ids.join(',')}`,
  );
}
