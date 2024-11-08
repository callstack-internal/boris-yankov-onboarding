import { useQuery } from '@tanstack/react-query';
import { fetchGroupWeather } from '../api/group';
import { fetchForecast } from '../api/forecast';

const cityIds = [728193, 3081368, 2643743, 5391959];

export function useCityListWeather() {
  return useQuery({
    queryKey: ['weather'],
    queryFn: () => fetchGroupWeather(cityIds),
    staleTime: 60 * 1000,
  });
}

export function useCityWeather(id: number) {
  return useQuery({
    queryKey: ['cities'],
    queryFn: () => fetchGroupWeather(cityIds),
    staleTime: 60 * 1000,
    select: data => data.list.find(c => c.id === id),
  });
}

export function useCityForecast(name: string) {
  return useQuery({
    queryKey: ['forecast', name],
    queryFn: () => fetchForecast(name),
    staleTime: 60 * 60 * 1000,
  });
}
