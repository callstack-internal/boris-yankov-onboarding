export function formatTemperature(temp: number) {
  return `${Math.round(temp - 273.15)}°C`;
}

export function formatDate(timestamp: number) {
  const dateObj = new Date(timestamp * 1000);
  const utcString = dateObj.toUTCString();
  return utcString.slice(0, 5) + utcString.slice(-12, -7);
}
