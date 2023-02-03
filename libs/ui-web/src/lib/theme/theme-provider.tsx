import React from 'react';
import { ThemeContext, ThemeValue } from './theme';
import { THEMES } from '../constants';
import './main.module.scss';

type ThemeProviderProps = {
  children?: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<ThemeValue>('night');

  React.useEffect(() => {
    const theme = localStorage.getItem('theme') as ThemeValue;
    if (theme) {
      setTheme(theme);
    }
  }, [theme]);

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
