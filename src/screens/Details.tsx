import type { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CityForecast from './CityForecast';
import CityWeather from './CityWeather';

export type DetailsRouteParams = {
  id: number;
  name: string;
};

export type DetailsScreenProps = StaticScreenProps<DetailsRouteParams>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Details({ route }: DetailsScreenProps) {
  return (
    <View style={styles.screen}>
      <CityWeather />
      <CityForecast />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
