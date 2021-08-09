import * as React from 'react';
import Button, { ButtonProps } from 'src/components/Button';
import ButtonGroupContext from './context';

type ButtonGroupItemProps = {
  selectedValue: string;
} & ButtonProps;

export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({ selectedValue, children, ...rest }) => {
  const { value, change, onChange } = React.useContext(ButtonGroupContext);
  const isActive = value === selectedValue;

  const handleOnClick = () => {
    change(selectedValue);
    onChange(selectedValue);
  };

  return (
    <Button variant={isActive ? 'primary' : undefined} onClick={handleOnClick} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonGroupItem;
