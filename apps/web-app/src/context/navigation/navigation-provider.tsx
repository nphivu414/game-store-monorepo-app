import * as React from 'react';
import { NavigationContext } from './navigation';

export const NavigationProvider: React.FC = ({ children }) => {
  const [title, setTitle] = React.useState<string>('Game Store');

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
