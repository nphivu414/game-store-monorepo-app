import { useTheme } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

export const useHeaderBlurEffectOptions = (): Partial<NativeStackNavigationOptions> | null => {
  const { dark } = useTheme();

  if (Platform.OS !== 'ios') {
    return null;
  }

  return {
    headerBlurEffect: dark ? 'systemUltraThinMaterialDark' : 'light',
    headerTransparent: true,
  };
};
