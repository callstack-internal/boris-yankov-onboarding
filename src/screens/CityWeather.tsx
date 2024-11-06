import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GroupedWeather } from '../api/group';
import { formatTemperature } from '../utils';
import { iconUrl } from '../api/api';

type Props = {
  city: GroupedWeather;
};

export default function CityWeather({ city }: Props) {
  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.tempWrapper}>
          <Text style={styles.temp}>{formatTemperature(city.main.temp)}</Text>
          <Image
            source={{ uri: iconUrl(city.weather[0].icon) }}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.details}>
        <Text>Feels like {Math.round(city.main.feels_like - 273.15)}°</Text>
        <Text>Humidity: {city.main.humidity}%</Text>
        <Text>Wind: {city.wind.speed} km/h</Text>
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
