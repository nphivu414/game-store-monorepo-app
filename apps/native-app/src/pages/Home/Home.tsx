import React from 'react';
import { ScrollView } from 'react-native';
import BestGames from './BestGames';
import FeaturedGames from './FeaturedGames';
import HighlightedTab from './HighlightedTab';

const Home = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <FeaturedGames />
      <BestGames />
      <HighlightedTab />
    </ScrollView>
  );
};

export default Home;
