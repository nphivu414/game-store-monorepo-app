import { Button, Text } from '@rneui/themed';
import React from 'react';
import { ScrollView } from 'react-native';
import GameCarousel from '../../components/GameCarousel';
import { Box } from '../../components';

const Home = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <GameCarousel />
    </ScrollView>
  );
};

export default Home;
