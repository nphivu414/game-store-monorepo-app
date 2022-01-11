import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeStack from '../Stacks/HomeStack';

type TabNavigationProps = {};
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};
const Tab = createBottomTabNavigator();
const { Navigator } = Tab;

const renderTabBarIcon = (routeName: string) => {
  return (props: TabBarIconProps) => {
    const { color } = props;
    let iconName = 'home';
    switch (routeName) {
      case 'Explore':
        iconName = 'explore';
        break;
      default:
        break;
    }
    return <Icon name={iconName} solid size={24} color={color} />;
  };
};

const TabNavigation: React.FC<TabNavigationProps> = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={(props) => {
        const {
          route: { name: routeName },
        } = props;
        return {
          headerShown: false,
          tabBarIcon: renderTabBarIcon(routeName),
        };
      }}
    >
      <Tab.Screen name="Explore" component={HomeStack} />
    </Navigator>
  );
};

export default TabNavigation;
