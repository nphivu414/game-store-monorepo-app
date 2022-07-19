import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, GameListStack, GenreStack, TagStack, PublisherStack } from './stacks';
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
              iconName = focused ? 'compass' : 'compass-outline';
              break;
            case 'GameListTab':
              iconName = focused ? 'game-controller' : 'game-controller-outline';
              break;
            case 'GenreTab':
              iconName = focused ? 'grid' : 'grid-outline';
              break;
            case 'TagTab':
              iconName = focused ? 'pricetags' : 'pricetags-outline';
              break;
            case 'PublisherTab':
              iconName = focused ? 'people-circle' : 'people-circle-outline';
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
          title: 'Explore',
        }}
      />
      <Tab.Screen
        name="GameListTab"
        component={GameListStack}
        options={{
          title: 'Games',
        }}
      />
      <Tab.Screen
        name="GenreTab"
        component={GenreStack}
        options={{
          title: 'Genres',
        }}
      />
      <Tab.Screen
        name="TagTab"
        component={TagStack}
        options={{
          title: 'Tags',
        }}
      />
      <Tab.Screen
        name="PublisherTab"
        component={PublisherStack}
        options={{
          title: 'Publishers',
        }}
      />
    </Tab.Navigator>
  );
};
