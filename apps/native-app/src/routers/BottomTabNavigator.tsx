import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/Home';
import GameListScreen from '../pages/GameList';
import useThemeColors from '../theme';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const { primary, grey0 } = useThemeColors();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'GameList':
              iconName = focused ? 'game-controller' : 'game-controller-outline';
              break;
            default:
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: grey0,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="GameList" component={GameListScreen} />
    </Tab.Navigator>
  );
};
