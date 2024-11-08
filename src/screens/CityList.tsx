import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { useCityListWeather } from '../data/queries';
import CityItem from './CityItem';

export default function CityList() {
  const { data, isPending, isError, error } = useCityListWeather();
  if (isPending) {
    return <ActivityIndicator size="large" style={styles.progress} />;
  }
  if (isError) {
    return <Text style={styles.error}>Error: {error.message}</Text>;
  }
  return (
    <FlashList
      data={data?.list ?? []}
      renderItem={({ item }) => <CityItem city={item} />}
      estimatedItemSize={200}
    />
  );
}

const styles = StyleSheet.create({
  progress: {
    flex: 1,
    alignSelf: 'center',
  },
  error: {
    color: 'red',
  },
});
