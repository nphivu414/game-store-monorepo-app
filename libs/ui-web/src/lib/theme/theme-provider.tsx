import * as React from 'react';
import { ThemeContext, ThemeValue } from './theme';
import { THEMES } from '../constants';
import './main.scss';

type ThemeProviderProps = {
  children?: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const defaultTheme = localStorage.getItem('theme') as ThemeValue;
  const [theme, setTheme] = React.useState<ThemeValue>(defaultTheme || 'night');

  const changeTheme = React.useCallback((value: ThemeValue) => {
    setTheme(value);
    localStorage.setItem('theme', value);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeList: THEMES,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
