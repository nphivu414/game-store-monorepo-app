import * as React from 'react';
import { ThemeContext, ThemeItem, ThemeValue } from './theme';

export const themeList: ThemeItem[] = [
  {
    icon: '🌝',
    label: 'Light',
    value: 'light',
  },
  {
    icon: '🌚',
    label: 'Dark',
    value: 'dark',
  },
  {
    icon: '🧛‍♂️',
    label: 'Dracula',
    value: 'dracula',
  },
  {
    icon: '🧁',
    label: 'Cupcake',
    value: 'cupcake',
  },
  {
    icon: '🐝',
    label: 'Bumblebee',
    value: 'bumblebee',
  },
  {
    icon: '✳️',
    label: 'Emerald',
    value: 'emerald',
  },
  {
    icon: '🏢',
    label: 'Corporate',
    value: 'corporate',
  },
  {
    icon: '🌃',
    label: 'Synthwave',
    value: 'synthwave',
  },
  {
    icon: '👴',
    label: 'Retro',
    value: 'retro',
  },
  {
    icon: '🤖',
    label: 'Cyberpunk',
    value: 'cyberpunk',
  },
  {
    icon: '🌸',
    label: 'Valentine',
    value: 'valentine',
  },
  {
    icon: '🎃',
    label: 'Halloween',
    value: 'halloween',
  },
  {
    icon: '🌷',
    label: 'Harden',
    value: 'garden',
  },
  {
    icon: '🌲',
    label: 'Forest',
    value: 'forest',
  },
  {
    icon: '🐟',
    label: 'Aqua',
    value: 'aqua',
  },
  {
    icon: '👓',
    label: 'Lofi',
    value: 'lofi',
  },
  {
    icon: '🖍',
    label: 'Pastel',
    value: 'pastel',
  },
  {
    icon: '🧚‍♀️',
    label: 'Fantasy',
    value: 'fantasy',
  },
  {
    icon: '📝',
    label: 'Wireframe',
    value: 'wireframe',
  },
  {
    icon: '🏴',
    label: 'Black',
    value: 'black',
  },
  {
    icon: '💎',
    label: 'Lxury',
    value: 'luxury',
  },
];

type ThemeProviderProps = {
  children?: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const defaultTheme = localStorage.getItem('theme') as ThemeValue;
  const [theme, setTheme] = React.useState<ThemeValue>(defaultTheme || 'dracula');

  const changeTheme = React.useCallback((value: ThemeValue) => {
    setTheme(value);
    localStorage.setItem('theme', value);
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
