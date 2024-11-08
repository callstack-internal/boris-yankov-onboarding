import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { formatTemperature } from '../utils';
import { iconUrl } from '../api/api';
import { useCityWeather } from '../data/queries';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

export default function CityWeather() {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  const { data, isPending, isError, error } = useCityWeather(route.params?.id);
  if (isPending) {
    return <Text>loading...</Text>;
  }
  if (isError) {
    return <Text>{error.message}</Text>;
  }
  if (!data) {
    return <Text>No data</Text>;
  }
  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.tempWrapper}>
          <Text style={styles.temp}>{formatTemperature(data.main.temp)}</Text>
          <Image
            source={{ uri: iconUrl(data.weather[0].icon) }}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.details}>
        <Text>Feels like {Math.round(data.main.feels_like - 273.15)}°</Text>
        <Text>Humidity: {data.main.humidity}%</Text>
        <Text>Wind: {data.wind.speed} km/h</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  tempWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temp: {
    fontSize: 32,
  },
  icon: {
    width: 64,
    height: 64,
  },
  details: {
    alignItems: 'flex-end',
  },
});
