export type Coord = {
  lon: number;
  lat: number;
};

export type WeatherConditionCode =
  | 200
  | 201
  | 202
  | 210
  | 211
  | 212
  | 221
  | 230
  | 231
  | 232
  | 300
  | 301
  | 302
  | 310
  | 311
  | 312
  | 313
  | 314
  | 321
  | 500
  | 501
  | 502
  | 503
  | 504
  | 511
  | 520
  | 521
  | 522
  | 531
  | 600
  | 601
  | 602
  | 611
  | 612
  | 613
  | 615
  | 616
  | 620
  | 621
  | 622
  | 701
  | 711
  | 721
  | 731
  | 741
  | 751
  | 761
  | 762
  | 771
  | 781
  | 800
  | 801
  | 802
  | 803
  | 804;

export type WeatherConditionText =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Mist'
  | 'Smoke'
  | 'Haze'
  | 'Dust'
  | 'Fog'
  | 'Sand'
  | 'Dust'
  | 'Ash'
  | 'Squall'
  | 'Tornado'
  | 'Clear'
  | 'Clouds';

export type WeatherIcon =
  | '01d'
  | '02d'
  | '03d'
  | '04d'
  | '09d'
  | '10d'
  | '11d'
  | '13d'
  | '50d'
  | '01n'
  | '02n'
  | '03n'
  | '04n'
  | '09n'
  | '10n'
  | '11n'
  | '13n'
  | '50n';

export type Wind = {
  speed: number;
  deg: number;
  gust?: number;
};

export type WeatherCondition = {
  id: WeatherConditionCode;
  main: WeatherConditionText;
  description: string;
  icon: WeatherIcon;
};

export type System = {
  type?: number;
  id?: number;
  message?: number;
  country?: CountryCode;
  timezone?: number;
  sunrise?: number;
  sunset?: number;
  pod?: 'n' | 'd';
};

export type Clouds = {
  all: number;
};

export type Pollution = {
  main: {
    aqi: number;
  };
  components: {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
  };
  dt: number;
};

export type Rain = Record<string, number>;

export type Weather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
};

export type CountryCode = `${Uppercase<string>}${Uppercase<string>}`;

export type City = {
  id?: number;
  name: string;
  coord?: Coord;
  local_names?: Record<`${string}${string}`, string>;
  lat?: number;
  lon?: number;
  country: CountryCode;
  state?: string;
  population?: number;
  timezone?: number;
  sunrise?: number;
  sunset?: number;
};
