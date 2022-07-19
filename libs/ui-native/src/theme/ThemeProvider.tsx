import React from 'react';
import { ThemeProvider as RNEThemeProvider, createTheme, lightColors, darkColors } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import { StyledThemeProvider } from './styled-component';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { dark } = useTheme();

  const theme = React.useMemo(() => {
    return createTheme({
      mode: dark ? 'dark' : 'light',
      lightColors: {
        ...lightColors,
      },
      darkColors: {
        ...darkColors,
      },
      spacing: { xs: 2, sm: 4, md: 8, lg: 12, xl: 24 },
    });
  }, [dark]);

  return (
    <RNEThemeProvider theme={theme}>
      <StyledThemeProvider>{children}</StyledThemeProvider>
    </RNEThemeProvider>
  );
};
