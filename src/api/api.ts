import Config from 'react-native-config';
import { WeatherIcon } from './types';

export function iconUrl(code: WeatherIcon) {
  return `https://openweathermap.org/img/wn/${code}@4x.png`;
}

export async function fetchData<T>(url: string) {
  const response = await fetch(`${url}&appid=${Config.OPENWEATHER_API_KEY}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const json = await response.json();
  return json as T;
}
