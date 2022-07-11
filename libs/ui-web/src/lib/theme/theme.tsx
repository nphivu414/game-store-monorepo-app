import * as React from 'react';

export type ThemeValue =
  | 'light'
  | 'dark'
  | 'cupcake'
  | 'bumblebee'
  | 'emerald'
  | 'corporate'
  | 'synthwave'
  | 'retro'
  | 'cyberpunk'
  | 'valentine'
  | 'halloween'
  | 'garden'
  | 'forest'
  | 'aqua'
  | 'lofi'
  | 'pastel'
  | 'fantasy'
  | 'wireframe'
  | 'black'
  | 'luxury'
  | 'dracula'
  | 'cmyk'
  | 'autumn'
  | 'business'
  | 'acid'
  | 'lemonade'
  | 'night'
  | 'coffee'
  | 'winter';

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
  },
});
