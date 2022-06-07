import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameList from '../../pages/GameList';

const Stack = createNativeStackNavigator();

export const GameListStack = () => {
  return (
    <Stack.Navigator initialRouteName="GameListScreen">
      <Stack.Screen
        name="GameListScreen"
        component={GameList}
        options={{
          title: 'Games',
        }}
      />
    </Stack.Navigator>
  );
};
