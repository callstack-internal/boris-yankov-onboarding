import React from 'react';
import { StyleSheet, View } from 'react-native';
import CityList from './CityList';

export default function Home() {
  return (
    <View style={styles.screen}>
      <CityList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
