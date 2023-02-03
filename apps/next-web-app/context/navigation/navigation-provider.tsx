import React from 'react';
import { NavigationContext } from './navigation';

type NavigationProviderProps = {
  children?: React.ReactNode;
};

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [title, setTitle] = React.useState<string>();

  const handleSetTitle = React.useCallback((value: string) => {
    setTitle(value);
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        title,
        setTitle: handleSetTitle,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
