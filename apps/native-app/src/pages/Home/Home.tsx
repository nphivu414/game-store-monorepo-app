import React from 'react';
import { ScrollView } from 'react-native';
import { GameCarousel } from '@game-store-monorepo/ui-native';

const Home = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <GameCarousel />
    </ScrollView>
  );
};

export default Home;
