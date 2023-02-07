import React from 'react';
import { Button, ButtonProps } from '../Button';
import ButtonGroupContext from './context';

type ButtonGroupItemProps = {
  value?: string;
} & ButtonProps;

export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({ value, children, ...rest }) => {
  const { value: selectedValue, change, onChange } = React.useContext(ButtonGroupContext);
  const isActive = selectedValue === value;

  const handleOnClick = () => {
    change(value);
    onChange(value);
  };

  return (
    <Button variant={isActive ? 'primary' : undefined} onClick={handleOnClick} {...rest}>
      {children}
    </Button>
  );
};
