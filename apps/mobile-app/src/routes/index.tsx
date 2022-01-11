import React from 'react';
import { StatusBar, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';

const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
  const flex = 1;

  return (
    <View style={{ flex }}>
      <StatusBar />
      <RootStack.Navigator>
        <RootStack.Screen name="Main" options={{ headerShown: false }} component={TabNavigation} />
      </RootStack.Navigator>
    </View>
  );
};

export default RootNavigation;
