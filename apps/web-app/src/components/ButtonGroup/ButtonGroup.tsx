import * as React from 'react';
import cn from 'classnames';
import ButtonGroupContext from './context';

export type ButtonGroupProps = {
  value?: string;
  isFullWidth?: boolean;
  className?: string;
  onChange?: (value) => void;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ value, onChange, isFullWidth, className, children }) => {
  const context = React.useContext(ButtonGroupContext);
  const { change } = context;
  const handleOnChange = (value) => {
    onChange && onChange(value);
  };
  context.onChange = handleOnChange;

  React.useEffect(() => {
    change(value);
  }, [change, value]);

  const buttonGroupClass = cn({
    'btn-group': true,
    'w-full': isFullWidth,
  });
  return <div className={cn(buttonGroupClass, className)}>{children}</div>;
};

export default ButtonGroup;
