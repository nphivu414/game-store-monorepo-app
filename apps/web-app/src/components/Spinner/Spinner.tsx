import * as React from 'react';
import cn from 'classnames';
import PacmanLoader from 'react-spinners/PacmanLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { ThemeContext } from 'src/context/theme';

type SpinnerProps = {
  isLoading?: boolean;
  theme?: 'Pacman' | 'ClipLoader' | 'ScaleLoader';
} & React.HTMLAttributes<HTMLDivElement>;

const Spinner: React.FC<SpinnerProps> = ({ isLoading, theme = 'Pacman', children, className, ...rest }) => {
  const { theme: appTheme } = React.useContext(ThemeContext);

  const spinnerColor = appTheme === 'light' ? 'gray' : 'white';

  if (!isLoading) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  const renderSpinner = () => {
    switch (theme) {
      case 'Pacman':
        return <PacmanLoader color={spinnerColor} />;
      case 'ClipLoader':
        return <ClipLoader color={spinnerColor} />;
      case 'ScaleLoader':
        return <ScaleLoader color={spinnerColor} />;
      default:
        return null;
    }
  };

  return (
    <div className={cn('relative w-full h-full', className)} {...rest}>
      <div className="absolute z-10" />
      <div className="absolute w-6 h-6 z-20 centered-axis-xy">{renderSpinner()}</div>
      {children}
    </div>
  );
};

export default Spinner;
