import { WeatherIcon } from './types';

const API_KEY = 'placeholder';

export function iconUrl(code: WeatherIcon) {
  return `https://openweathermap.org/img/wn/${code}@4x.png`;
}

export async function fetchData<T>(url: string) {
  const response = await fetch(`${url}&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const json = await response.json();
  return json as T;
}
