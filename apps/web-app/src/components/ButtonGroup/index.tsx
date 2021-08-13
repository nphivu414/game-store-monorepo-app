import InternalButtonGroup, { ButtonGroupProps } from './ButtonGroup';
import ButtonGroupItem from './ButtonGroupItem';
import ButtonGroupProvider from './context/ButtonGroupContextProvider';

type ButtonGroupCompound = typeof InternalButtonGroup & {
  Item: typeof ButtonGroupItem;
};

const Group: React.FC<ButtonGroupProps> = ({ children, ...rest }) => {
  return (
    <ButtonGroupProvider>
      <InternalButtonGroup {...rest}>{children}</InternalButtonGroup>
    </ButtonGroupProvider>
  );
};

const ButtonGroup = Group as ButtonGroupCompound;
ButtonGroup.Item = ButtonGroupItem;

export { ButtonGroupItem };
export default ButtonGroup;
