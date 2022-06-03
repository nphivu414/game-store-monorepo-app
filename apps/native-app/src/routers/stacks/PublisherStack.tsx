import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Publishers from '../../pages/Publishers';
import { useHeaderBlurEffectOptions } from '../../utils';

const Stack = createNativeStackNavigator();

export const PublisherStack = () => {
  const headerBlurEffectOptions = useHeaderBlurEffectOptions();
  return (
    <Stack.Navigator
      initialRouteName="PublisherScreen"
      screenOptions={{
        ...headerBlurEffectOptions,
      }}
    >
      <Stack.Screen
        name="PublisherScreen"
        component={Publishers}
        options={{
          title: 'Publishers',
        }}
      />
    </Stack.Navigator>
  );
};
