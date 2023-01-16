import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';
import GameList from '../../pages/GameList';
import { useHeaderBlurEffectOptions } from '../../utils';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  const headerBlurEffectOptions = useHeaderBlurEffectOptions();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerLargeTitle: true,
        headerLargeTitleShadowVisible: true,
        ...headerBlurEffectOptions,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: 'Explore',
        }}
      />
      <Stack.Screen name="GameListScreen" component={GameList} />
    </Stack.Navigator>
  );
};
