import * as React from 'react';
import cn from 'classnames';
import PacmanLoader from 'react-spinners/PacmanLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { ThemeContext } from 'src/context/theme';

type SpinnerProps = {
  isLoading?: boolean;
  isFullScreen?: boolean;
  theme?: 'Pacman' | 'ClipLoader' | 'ScaleLoader';
} & React.HTMLAttributes<HTMLDivElement>;

const Spinner: React.FC<SpinnerProps> = ({
  isLoading = true,
  isFullScreen,
  theme = 'Pacman',
  children,
  className,
  ...rest
}) => {
  const { theme: appTheme } = React.useContext(ThemeContext);
  const spinnerColor = appTheme === 'light' ? 'gray' : 'white';
  const spinnerContainerClass = cn({
    'relative w-full h-full': true,
    'min-h-screen': isFullScreen,
  });

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

  if (!isLoading) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  if (!children) {
    return renderSpinner();
  }

  return (
    <div className={cn(spinnerContainerClass, className)} {...rest}>
      <div className="absolute z-10" />
      <div className="absolute w-6 h-6 z-20 centered-axis-xy">{renderSpinner()}</div>
      {children}
    </div>
  );
};

export default Spinner;
