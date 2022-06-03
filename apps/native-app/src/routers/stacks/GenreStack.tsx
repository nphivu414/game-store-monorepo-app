import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Genres from '../../pages/Genres';
import { useHeaderBlurEffectOptions } from '../../utils';

const Stack = createNativeStackNavigator();

export const GenreStack = () => {
  const headerBlurEffectOptions = useHeaderBlurEffectOptions();
  return (
    <Stack.Navigator
      initialRouteName="GenreScreen"
      screenOptions={{
        ...headerBlurEffectOptions,
      }}
    >
      <Stack.Screen
        name="GenreScreen"
        component={Genres}
        options={{
          title: 'Genres',
        }}
      />
    </Stack.Navigator>
  );
};
