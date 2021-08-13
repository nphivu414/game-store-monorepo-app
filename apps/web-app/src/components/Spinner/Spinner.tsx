import * as React from 'react';
import cn from 'classnames';
import PacmanLoader from 'react-spinners/PacmanLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import { ThemeContext } from 'src/context/theme';

type SpinnerProps = {
  isLoading?: boolean;
  isFullScreen?: boolean;
  theme?: 'Pacman' | 'ClipLoader';
  size?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const Spinner: React.FC<SpinnerProps> = ({
  isLoading = true,
  isFullScreen,
  theme = 'Pacman',
  size,
  children,
  className,
  ...rest
}) => {
  const { theme: appTheme } = React.useContext(ThemeContext);
  const spinnerColor = appTheme === 'light' ? 'gray' : 'white';
  const spinnerContainerClass = cn({
    'relative w-full h-full': true,
    'min-h-screen': isLoading && isFullScreen,
  });

  const overlayClass = cn({
    'absolute left-0 top-0 w-full z-10 bg-black opacity-80 transition-all duration-500': true,
    'h-screen': isFullScreen,
    'opacity-0': !isLoading,
  });

  const renderSpinner = () => {
    switch (theme) {
      case 'Pacman':
        return <PacmanLoader color={spinnerColor} size={size} />;
      case 'ClipLoader':
        return <ClipLoader color={spinnerColor} size={size} />;
      default:
        return null;
    }
  };

  if (!children) {
    return isLoading ? renderSpinner() : null;
  }

  return (
    <div className={cn(spinnerContainerClass, className)} {...rest}>
      {isLoading && <div className={overlayClass} />}
      {isLoading && <div className="absolute w-6 h-6 z-20 centered-axis-xy">{renderSpinner()}</div>}
      {children}
    </div>
  );
};

export default Spinner;
