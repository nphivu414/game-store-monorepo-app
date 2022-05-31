import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, GameListStack } from './stacks';
import { useThemeColors } from '@game-store-monorepo/ui-native';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const { primary, grey0 } = useThemeColors();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'HomeTab':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'GameListTab':
              iconName = focused ? 'game-controller' : 'game-controller-outline';
              break;
            default:
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: grey0,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="GameListTab"
        component={GameListStack}
        options={{
          title: 'Games',
        }}
      />
    </Tab.Navigator>
  );
};
