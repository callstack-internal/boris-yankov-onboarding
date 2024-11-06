import { fetchData } from './api';
import {
  City,
  Clouds,
  Rain,
  System,
  Weather,
  WeatherCondition,
  Wind,
} from './types';

type Forecast = {
  dt: number;
  main: Weather;
  weather: WeatherCondition[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: System;
  dt_txt: string;
};

type ForecastResponse = {
  cod: string;
  message: 0;
  cnt: number;
  list: Forecast[];
  city: City;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sampleResponse: ForecastResponse = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1730829600,
      main: {
        temp: 281.19,
        feels_like: 280.22,
        temp_min: 280.2,
        temp_max: 281.19,
        pressure: 1032,
        sea_level: 1032,
        grnd_level: 982,
        humidity: 42,
        temp_kf: 0.99,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.83,
        deg: 127,
        gust: 3.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-05 18:00:00',
    },
    {
      dt: 1730840400,
      main: {
        temp: 280.34,
        feels_like: 279.48,
        temp_min: 278.63,
        temp_max: 280.34,
        pressure: 1032,
        sea_level: 1032,
        grnd_level: 983,
        humidity: 45,
        temp_kf: 1.71,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.6,
        deg: 120,
        gust: 4.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-05 21:00:00',
    },
    {
      dt: 1730851200,
      main: {
        temp: 278.58,
        feels_like: 278.58,
        temp_min: 277.27,
        temp_max: 278.58,
        pressure: 1033,
        sea_level: 1033,
        grnd_level: 984,
        humidity: 54,
        temp_kf: 1.31,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.04,
        deg: 160,
        gust: 1.49,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-06 00:00:00',
    },
    {
      dt: 1730862000,
      main: {
        temp: 276.58,
        feels_like: 276.58,
        temp_min: 276.58,
        temp_max: 276.58,
        pressure: 1033,
        sea_level: 1033,
        grnd_level: 983,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.23,
        deg: 217,
        gust: 1.03,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-06 03:00:00',
    },
    {
      dt: 1730872800,
      main: {
        temp: 277.93,
        feels_like: 277.93,
        temp_min: 277.93,
        temp_max: 277.93,
        pressure: 1034,
        sea_level: 1034,
        grnd_level: 984,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 1.23,
        deg: 225,
        gust: 1.49,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-06 06:00:00',
    },
    {
      dt: 1730883600,
      main: {
        temp: 283.43,
        feels_like: 281.51,
        temp_min: 283.43,
        temp_max: 283.43,
        pressure: 1034,
        sea_level: 1034,
        grnd_level: 984,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 12,
      },
      wind: {
        speed: 1.39,
        deg: 47,
        gust: 0.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-06 09:00:00',
    },
    {
      dt: 1730894400,
      main: {
        temp: 285.96,
        feels_like: 284.13,
        temp_min: 285.96,
        temp_max: 285.96,
        pressure: 1032,
        sea_level: 1032,
        grnd_level: 983,
        humidity: 32,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 2.02,
        deg: 72,
        gust: 1.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-06 12:00:00',
    },
    {
      dt: 1730905200,
      main: {
        temp: 282.55,
        feels_like: 281.49,
        temp_min: 282.55,
        temp_max: 282.55,
        pressure: 1033,
        sea_level: 1033,
        grnd_level: 984,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 2.19,
        deg: 118,
        gust: 1.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-06 15:00:00',
    },
    {
      dt: 1730916000,
      main: {
        temp: 280.41,
        feels_like: 280.41,
        temp_min: 280.41,
        temp_max: 280.41,
        pressure: 1035,
        sea_level: 1035,
        grnd_level: 985,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 1.25,
        deg: 144,
        gust: 1.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-06 18:00:00',
    },
    {
      dt: 1730926800,
      main: {
        temp: 279.31,
        feels_like: 279.31,
        temp_min: 279.31,
        temp_max: 279.31,
        pressure: 1036,
        sea_level: 1036,
        grnd_level: 986,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 1.09,
        deg: 189,
        gust: 0.99,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-06 21:00:00',
    },
    {
      dt: 1730937600,
      main: {
        temp: 278.12,
        feels_like: 277.05,
        temp_min: 278.12,
        temp_max: 278.12,
        pressure: 1036,
        sea_level: 1036,
        grnd_level: 986,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 1.51,
        deg: 208,
        gust: 1.19,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-07 00:00:00',
    },
    {
      dt: 1730948400,
      main: {
        temp: 277.5,
        feels_like: 276.48,
        temp_min: 277.5,
        temp_max: 277.5,
        pressure: 1036,
        sea_level: 1036,
        grnd_level: 986,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 1.41,
        deg: 222,
        gust: 1.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-07 03:00:00',
    },
    {
      dt: 1730959200,
      main: {
        temp: 278.72,
        feels_like: 278.72,
        temp_min: 278.72,
        temp_max: 278.72,
        pressure: 1037,
        sea_level: 1037,
        grnd_level: 987,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 1.12,
        deg: 224,
        gust: 1.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-07 06:00:00',
    },
    {
      dt: 1730970000,
      main: {
        temp: 284.41,
        feels_like: 282.56,
        temp_min: 284.41,
        temp_max: 284.41,
        pressure: 1036,
        sea_level: 1036,
        grnd_level: 987,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.21,
        deg: 40,
        gust: 1.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-07 09:00:00',
    },
    {
      dt: 1730980800,
      main: {
        temp: 286.94,
        feels_like: 285.18,
        temp_min: 286.94,
        temp_max: 286.94,
        pressure: 1034,
        sea_level: 1034,
        grnd_level: 985,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.72,
        deg: 69,
        gust: 1.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-07 12:00:00',
    },
    {
      dt: 1730991600,
      main: {
        temp: 283.22,
        feels_like: 281.38,
        temp_min: 283.22,
        temp_max: 283.22,
        pressure: 1033,
        sea_level: 1033,
        grnd_level: 984,
        humidity: 42,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.88,
        deg: 128,
        gust: 1.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-07 15:00:00',
    },
    {
      dt: 1731002400,
      main: {
        temp: 281.29,
        feels_like: 281.29,
        temp_min: 281.29,
        temp_max: 281.29,
        pressure: 1034,
        sea_level: 1034,
        grnd_level: 984,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.27,
        deg: 219,
        gust: 1.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-07 18:00:00',
    },
    {
      dt: 1731013200,
      main: {
        temp: 280.09,
        feels_like: 279.08,
        temp_min: 280.09,
        temp_max: 280.09,
        pressure: 1034,
        sea_level: 1034,
        grnd_level: 984,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.7,
        deg: 225,
        gust: 1.71,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-07 21:00:00',
    },
    {
      dt: 1731024000,
      main: {
        temp: 279.12,
        feels_like: 277.73,
        temp_min: 279.12,
        temp_max: 279.12,
        pressure: 1034,
        sea_level: 1034,
        grnd_level: 984,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.92,
        deg: 236,
        gust: 2.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-08 00:00:00',
    },
    {
      dt: 1731034800,
      main: {
        temp: 278.63,
        feels_like: 277.07,
        temp_min: 278.63,
        temp_max: 278.63,
        pressure: 1033,
        sea_level: 1033,
        grnd_level: 983,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.01,
        deg: 234,
        gust: 2.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-08 03:00:00',
    },
    {
      dt: 1731045600,
      main: {
        temp: 279.94,
        feels_like: 278.9,
        temp_min: 279.94,
        temp_max: 279.94,
        pressure: 1032,
        sea_level: 1032,
        grnd_level: 983,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.71,
        deg: 242,
        gust: 2.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-08 06:00:00',
    },
    {
      dt: 1731056400,
      main: {
        temp: 286.49,
        feels_like: 284.77,
        temp_min: 286.49,
        temp_max: 286.49,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 982,
        humidity: 34,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.18,
        deg: 358,
        gust: 1.22,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-08 09:00:00',
    },
    {
      dt: 1731067200,
      main: {
        temp: 288.83,
        feels_like: 287.24,
        temp_min: 288.83,
        temp_max: 288.83,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 980,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.77,
        deg: 66,
        gust: 1.7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-08 12:00:00',
    },
    {
      dt: 1731078000,
      main: {
        temp: 285.01,
        feels_like: 283.27,
        temp_min: 285.01,
        temp_max: 285.01,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 980,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 2.24,
        deg: 130,
        gust: 2.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-08 15:00:00',
    },
    {
      dt: 1731088800,
      main: {
        temp: 282.64,
        feels_like: 282.64,
        temp_min: 282.64,
        temp_max: 282.64,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 981,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 1.15,
        deg: 143,
        gust: 2.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-08 18:00:00',
    },
    {
      dt: 1731099600,
      main: {
        temp: 281.2,
        feels_like: 280.69,
        temp_min: 281.2,
        temp_max: 281.2,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 981,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 1.4,
        deg: 199,
        gust: 1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-08 21:00:00',
    },
    {
      dt: 1731110400,
      main: {
        temp: 280.1,
        feels_like: 279.37,
        temp_min: 280.1,
        temp_max: 280.1,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 981,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 1.46,
        deg: 217,
        gust: 1.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-09 00:00:00',
    },
    {
      dt: 1731121200,
      main: {
        temp: 279.62,
        feels_like: 278.47,
        temp_min: 279.62,
        temp_max: 279.62,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 980,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 1.76,
        deg: 235,
        gust: 1.82,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-09 03:00:00',
    },
    {
      dt: 1731132000,
      main: {
        temp: 280.35,
        feels_like: 279.72,
        temp_min: 280.35,
        temp_max: 280.35,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 981,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 1.41,
        deg: 243,
        gust: 1.64,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-09 06:00:00',
    },
    {
      dt: 1731142800,
      main: {
        temp: 285.83,
        feels_like: 284.28,
        temp_min: 285.83,
        temp_max: 285.83,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 980,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 1.05,
        deg: 38,
        gust: 1.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-09 09:00:00',
    },
    {
      dt: 1731153600,
      main: {
        temp: 287.73,
        feels_like: 286.24,
        temp_min: 287.73,
        temp_max: 287.73,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 979,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 2.75,
        deg: 77,
        gust: 3.04,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-09 12:00:00',
    },
    {
      dt: 1731164400,
      main: {
        temp: 283.94,
        feels_like: 282.3,
        temp_min: 283.94,
        temp_max: 283.94,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 978,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 86,
      },
      wind: {
        speed: 2.37,
        deg: 131,
        gust: 2.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-09 15:00:00',
    },
    {
      dt: 1731175200,
      main: {
        temp: 281.75,
        feels_like: 281.75,
        temp_min: 281.75,
        temp_max: 281.75,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 979,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 1.23,
        deg: 131,
        gust: 2.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-09 18:00:00',
    },
    {
      dt: 1731186000,
      main: {
        temp: 279.83,
        feels_like: 279.83,
        temp_min: 279.83,
        temp_max: 279.83,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 980,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 1.1,
        deg: 160,
        gust: 1.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-09 21:00:00',
    },
    {
      dt: 1731196800,
      main: {
        temp: 278.7,
        feels_like: 277.79,
        temp_min: 278.7,
        temp_max: 278.7,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 980,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 1.45,
        deg: 197,
        gust: 1.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-10 00:00:00',
    },
    {
      dt: 1731207600,
      main: {
        temp: 277.76,
        feels_like: 276.01,
        temp_min: 277.76,
        temp_max: 277.76,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 979,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 2.05,
        deg: 231,
        gust: 1.86,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-11-10 03:00:00',
    },
    {
      dt: 1731218400,
      main: {
        temp: 278.83,
        feels_like: 277.62,
        temp_min: 278.83,
        temp_max: 278.83,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 979,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 14,
      },
      wind: {
        speed: 1.71,
        deg: 243,
        gust: 1.87,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-10 06:00:00',
    },
    {
      dt: 1731229200,
      main: {
        temp: 284.67,
        feels_like: 282.92,
        temp_min: 284.67,
        temp_max: 284.67,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 979,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.17,
        deg: 349,
        gust: 1.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-10 09:00:00',
    },
    {
      dt: 1731240000,
      main: {
        temp: 286.8,
        feels_like: 285.16,
        temp_min: 286.8,
        temp_max: 286.8,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 977,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.19,
        deg: 45,
        gust: 0.89,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-10 12:00:00',
    },
    {
      dt: 1731250800,
      main: {
        temp: 283.22,
        feels_like: 281.54,
        temp_min: 283.22,
        temp_max: 283.22,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 977,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.93,
        deg: 131,
        gust: 1.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-11-10 15:00:00',
    },
  ],
  city: {
    id: 728193,
    name: 'Plovdiv',
    coord: {
      lat: 42.15,
      lon: 24.75,
    },
    country: 'BG',
    population: 340494,
    timezone: 7200,
    sunrise: 1730782746,
    sunset: 1730819405,
  },
};

export async function fetchForecast(city: string | number) {
  return fetchData<ForecastResponse>(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}`,
  );
}
