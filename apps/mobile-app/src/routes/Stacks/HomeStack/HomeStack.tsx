import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../pages/Home';
import GameDetails from '../../../pages/GameDetails';

const HomeStackNavigator = createNativeStackNavigator<HomeStackNavigatorParamList>();

type HomeStackNavigatorParamList = {
  Home: undefined;
  GameDetails: { sort: 'latest' | 'top' } | undefined;
};

const HomeStack: React.FC = () => {
  return (
    <HomeStackNavigator.Navigator initialRouteName="Home">
      <HomeStackNavigator.Screen name="Home" component={Home} />
      <HomeStackNavigator.Screen name="GameDetails" component={GameDetails} />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
