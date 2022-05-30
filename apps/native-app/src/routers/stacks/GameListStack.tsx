import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameList from '../../pages/GameList';
import { useHeaderBlurEffectOptions } from '../../utils';

const Stack = createNativeStackNavigator();

export const GameListStack = () => {
  const headerBlurEffectOptions = useHeaderBlurEffectOptions();
  return (
    <Stack.Navigator
      initialRouteName="GameList"
      screenOptions={{
        ...headerBlurEffectOptions,
      }}
    >
      <Stack.Screen name="GameListScreen" component={GameList} />
    </Stack.Navigator>
  );
};
