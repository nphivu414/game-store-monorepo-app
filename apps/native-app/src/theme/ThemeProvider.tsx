import React from 'react';
import { ThemeProvider as BaseThemeProvider, createTheme, lightColors, darkColors } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import { Platform } from 'react-native';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { dark } = useTheme();

  const theme = React.useMemo(() => {
    return createTheme({
      mode: dark ? 'dark' : 'light',
    });
  }, [dark]);

  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};
