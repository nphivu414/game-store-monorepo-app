import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';
import GameList from '../../pages/GameList';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen name="GameListScreen" component={GameList} />
    </Stack.Navigator>
  );
};
