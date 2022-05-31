import React from 'react';
import { ThemeProvider as RNEThemeProvider, createTheme } from '@rneui/themed';
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
    });
  }, [dark]);

  return (
    <RNEThemeProvider theme={theme}>
      <StyledThemeProvider>{children}</StyledThemeProvider>
    </RNEThemeProvider>
  );
};
