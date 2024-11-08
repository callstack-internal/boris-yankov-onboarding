import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { formatDate, formatTemperature } from '../utils';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useCityForecast } from '../data/queries';
import { RootStackParamList } from '../../App';

export default function CityForecast() {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  const { data, isPending, isError, error } = useCityForecast(
    route.params.name,
  );
  if (isPending) {
    return <ActivityIndicator size="large" style={styles.progress} />;
  }
  if (isError) {
    return <Text style={styles.error}>Error: {error.message}</Text>;
  }
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>5-day forecast</Text>
      {data.list.map(x => (
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
  progress: {
    flex: 1,
    alignSelf: 'center',
  },
  icon: {
    width: 128,
    height: 128,
  },
  error: {
    color: 'red',
  },
});
