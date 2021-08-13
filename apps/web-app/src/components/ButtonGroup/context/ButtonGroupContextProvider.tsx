import * as React from 'react';

import ButtonGroupContext from '.';

const ButtonGroupProvider: React.FC = ({ children }) => {
  const [value, setValue] = React.useState(null);

  const change = React.useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <ButtonGroupContext.Provider
      value={{
        value,
        change,
        onChange: () => {
          return;
        },
      }}
    >
      {children}
    </ButtonGroupContext.Provider>
  );
};

export default ButtonGroupProvider;
