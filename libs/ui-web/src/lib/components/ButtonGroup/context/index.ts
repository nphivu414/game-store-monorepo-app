import * as React from 'react';

export type ButtonGroupContextProps = {
  value: any;
  change: (value: any) => void;
  onChange: (value: any) => void;
};

const defaultProps: ButtonGroupContextProps = {
  value: null,
  change: () => {
    return;
  },
  onChange: () => {
    return;
  },
};

export default React.createContext(defaultProps);
