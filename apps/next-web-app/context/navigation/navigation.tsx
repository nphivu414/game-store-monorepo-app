import React from 'react';

export type NavigationContextProps = {
  title?: string;
  setTitle: (value: string) => void;
};

export const NavigationContext = React.createContext<NavigationContextProps>({
  setTitle: () => {
    return;
  },
});
