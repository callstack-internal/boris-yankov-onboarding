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

export type GroupedWeather = {
  coord: Coord;
  sys: System;
  weather: WeatherCondition[];
  main: Weather;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  id: number;
  name: string;
};

export const sampleGroupWeather: GroupResponse = {
  cnt: 4,
  list: [
    {
      coord: { lon: 24.75, lat: 42.15 },
      sys: {
        country: 'BG',
        timezone: 7200,
        sunrise: 1730869221,
        sunset: 1730905736,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      main: {
        temp: 280.19,
        feels_like: 278.84,
        temp_min: 280.19,
        temp_max: 282.32,
        pressure: 1034,
        sea_level: 1034,
        grnd_level: 984,
        humidity: 49,
      },
      visibility: 10000,
      wind: { speed: 2.06, deg: 90 },
      clouds: { all: 0 },
      dt: 1730909346,
      id: 728193,
      name: 'Plovdiv',
    },
    {
      coord: { lon: 17.0333, lat: 51.1 },
      sys: {
        country: 'PL',
        timezone: 3600,
        sunrise: 1730872406,
        sunset: 1730906255,
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
        temp: 278.28,
        feels_like: 275.41,
        temp_min: 277.15,
        temp_max: 278.66,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1014,
        humidity: 93,
      },
      visibility: 9000,
      wind: { speed: 3.6, deg: 310 },
      clouds: { all: 100 },
      dt: 1730909367,
      id: 3081368,
      name: 'Wroclaw',
    },
    {
      coord: { lon: -0.1257, lat: 51.5085 },
      sys: {
        country: 'GB',
        timezone: 0,
        sunrise: 1730876603,
        sunset: 1730910295,
      },
      weather: [{ id: 721, main: 'Haze', description: 'haze', icon: '50d' }],
      main: {
        temp: 283.31,
        feels_like: 282.76,
        temp_min: 282.35,
        temp_max: 284.21,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1027,
        humidity: 91,
      },
      visibility: 5000,
      wind: { speed: 2.06, deg: 140 },
      clouds: { all: 100 },
      dt: 1730909365,
      id: 2643743,
      name: 'London',
    },
    {
      coord: { lon: -122.4194, lat: 37.7749 },
      sys: {
        country: 'US',
        timezone: -28800,
        sunrise: 1730904056,
        sunset: 1730941545,
      },
      weather: [
        { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
      ],
      main: {
        temp: 287.08,
        feels_like: 285.44,
        temp_min: 284.91,
        temp_max: 288.35,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1012,
        humidity: 35,
      },
      visibility: 10000,
      wind: { speed: 4.02, deg: 36 },
      clouds: { all: 20 },
      dt: 1730906307,
      id: 5391959,
      name: 'San Francisco',
    },
  ],
};

export async function getGroupWeather(ids: number[]) {
  return fetchData<GroupResponse>(
    `https://api.openweathermap.org/data/2.5/group?id=${ids.join(',')}`,
  );
}
