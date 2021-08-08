import * as React from 'react';
import RingLoader from 'react-spinners/RingLoader';

type SpinnerProps = {
  isLoading?: boolean;
};

const Spinner: React.FC<SpinnerProps> = ({ isLoading, children }) => {
  if (!isLoading) {
    return <> {children}</>;
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full z-10" />
      <div className="absolute left-0 top-0 w-6 h-6 z-20 centered-axis-xy">
        <RingLoader color="white" />
      </div>
      {children}
    </div>
  );
};

export default Spinner;
