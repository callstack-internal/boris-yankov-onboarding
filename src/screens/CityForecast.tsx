import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GroupedWeather } from '../api/group';
import { sampleForecastResponse } from '../api/forecast';
import { formatDate, formatTemperature } from '../utils';

type Props = {
  city: GroupedWeather;
};

export default function CityForecast({ city }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>5-day forecast</Text>
      {sampleForecastResponse.list.map(x => (
        <Text key={x.dt}>
          {formatDate(x.dt)} {formatTemperature(x.main.temp_max)}{' '}
          {formatTemperature(x.main.temp_min)}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  header: {
    fontSize: 24,
  },
  icon: {
    width: 128,
    height: 128,
  },
});
