import React from 'react';
import { ScrollView } from 'react-native';
import BestGames from './BestGames';
import FeaturedGames from './FeaturedGames';

const Home = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <FeaturedGames />
      <BestGames />
    </ScrollView>
  );
};

export default Home;
