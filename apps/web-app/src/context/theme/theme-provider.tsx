import * as React from 'react';
import { ThemeContext, ThemeItem, ThemeValue } from './theme';

const themeList: ThemeItem[] = [
  {
    icon: '🌝',
    label: 'Light',
    value: 'light',
  },
  {
    icon: '🌚',
    label: 'Dark',
    value: 'dracula',
  },
];

export const ThemeProvider: React.FC = ({ children }) => {
                           
  
                    const [theme, setTheme] = React.useState<ThemeValue>('dracula');

  const changeTheme = React.useCallback((value: ThemeValue) => {
    setTheme(value);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeList,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
