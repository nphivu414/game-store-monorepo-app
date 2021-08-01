import * as React from 'react';

export type ThemeValue =
  | 'light'
  | 'dracula';

export type ThemeItem = {
  icon: string;
  label: string;
  value: ThemeValue;
};

export type ThemeContextProps = {
  theme?: ThemeValue;
  themeList: ThemeItem[];
  changeTheme: (value: ThemeValue) => void;
};

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeList: [],
  changeTheme: () => {
    return;
  }
});
