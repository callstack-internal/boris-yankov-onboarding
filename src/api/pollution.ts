// https://openweathermap.org/api/air-pollution

import { fetchData } from './api';
import { Coord, Pollution } from './types';

type PollutionResponse = {
  coord: Coord;
  list: Pollution[];
};

export const samplePollutionResponse: PollutionResponse = {
  coord: {
    lon: 0,
    lat: 0,
  },
  list: [
    {
      main: {
        aqi: 1,
      },
      components: {
        co: 307.08,
        no: 0,
        no2: 0.05,
        o3: 24.32,
        so2: 0.06,
        pm2_5: 2.66,
        pm10: 6.8,
        nh3: 0,
      },
      dt: 1730832313,
    },
  ],
};

export async function fetchPollution(lat: number, lon: number) {
  return fetchData<PollutionResponse>(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`,
  );
}
