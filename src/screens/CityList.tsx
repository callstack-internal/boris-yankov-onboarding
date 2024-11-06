import { FlashList } from '@shopify/flash-list';
import React from 'react';
import CityItem from './CityItem';
import { sampleGroupWeather } from '../api/group';

export default function CityList() {
  return (
    <FlashList
      data={sampleGroupWeather.list}
      renderItem={({ item }) => <CityItem city={item} />}
      estimatedItemSize={200}
    />
  );
}
