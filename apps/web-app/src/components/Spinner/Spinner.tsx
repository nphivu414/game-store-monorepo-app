import * as React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

type SpinnerProps = {
  isLoading?: boolean;
};

const Spinner: React.FC<SpinnerProps> = ({ isLoading, children }) => {
  if (!isLoading) {
    return <> {children}</>;
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute z-10" />
      <div className="absolute w-6 h-6 z-20 centered-axis-xy">
        <PacmanLoader color="white" />
      </div>
      {children}
    </div>
  );
};

export default Spinner;
