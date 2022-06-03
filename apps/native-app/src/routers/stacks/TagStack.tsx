import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tags from '../../pages/Tags';
import { useHeaderBlurEffectOptions } from '../../utils';

const Stack = createNativeStackNavigator();

export const TagStack = () => {
  const headerBlurEffectOptions = useHeaderBlurEffectOptions();
  return (
    <Stack.Navigator
      initialRouteName="TagScreen"
      screenOptions={{
        ...headerBlurEffectOptions,
      }}
    >
      <Stack.Screen
        name="TagScreen"
        component={Tags}
        options={{
          title: 'Tags',
        }}
      />
    </Stack.Navigator>
  );
};
