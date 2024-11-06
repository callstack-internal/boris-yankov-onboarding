import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { iconUrl } from '../api/api';
import { GroupedWeather } from '../api/group';
import { formatTemperature } from '../utils';
import { PressableScale } from './PressableScale';

type Props = {
  city: GroupedWeather;
};

export default function CityItem({ city }: Props) {
  const navigation = useNavigation();
  return (
    <PressableScale
      onPress={() =>
        navigation.navigate('Details', { id: city.id, name: city.name })
      }>
      <View style={styles.card}>
        <View>
          <Text style={styles.name}>
            {city.name}, {city.sys.country}
          </Text>
          <Text style={styles.temp}>{formatTemperature(city.main.temp)}</Text>
          <Text>{city.weather[0].main}</Text>
        </View>
        <Image
          source={{ uri: iconUrl(city.weather[0].icon) }}
          style={styles.icon}
        />
      </View>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 8,
    paddingHorizontal: 16,
  },
  name: {
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  icon: {
    width: 96,
    height: 96,
  },
});
