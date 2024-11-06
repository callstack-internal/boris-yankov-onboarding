import type { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sampleGroupWeather } from '../api/group';
import CityForecast from './CityForecast';
import CityWeather from './CityWeather';

export type Props = StaticScreenProps<{
  id: number;
  name: string;
}>;

export default function Details({ route }: Props) {
  const city = sampleGroupWeather.list.find(c => c.id === route.params.id);
  if (!city) {
    return <Text>City not found</Text>;
  }
  return (
    <View style={styles.screen}>
      <CityWeather city={city} />
      <CityForecast city={city} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  city: {
    fontSize: 32,
  },
  icon: {
    width: 128,
    height: 128,
  },
});
