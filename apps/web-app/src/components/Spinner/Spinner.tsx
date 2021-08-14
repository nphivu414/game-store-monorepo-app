import * as React from 'react';
import cn from 'classnames';
import PacmanLoader from 'react-spinners/PacmanLoader';
import ClipLoader from 'react-spinners/ClipLoader';

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
        return <PacmanLoader color="white" size={size} />;
      case 'ClipLoader':
        return <ClipLoader color="white" size={size} />;
      default:
        return null;
    }
  };

  if (!children) {
    return isLoading ? renderSpinner() : null;
  }

  return (
    <div className={cn(spinnerContainerClass, className)} {...rest}>
      {isLoading && (
        <>
          <div className={overlayClass} />
          <div className="absolute left-[45%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 z-20">
            {renderSpinner()}
          </div>
        </>
      )}
      {children}
    </div>
  );
};

export default Spinner;
