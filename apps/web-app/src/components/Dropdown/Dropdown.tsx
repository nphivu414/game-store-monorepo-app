import * as React from 'react';
import cn from 'classnames';

export interface DropdownItem {
  title: React.ReactElement | string;
  onClick?: () => void;
  className?: string;
}

type DropdownProps = {
  items: DropdownItem[];
  position?: 'end' | 'top' | 'left' | 'right';
  trigger?: 'click' | 'hover';
  isOpened?: boolean;
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({ items, children, position = 'end', trigger, isOpened, className }) => {
  const dropdownClass = cn({
    dropdown: true,
    'dropdown-end': position === 'end',
    'dropdown-top': position === 'top',
    'dropdown-left': position === 'left',
    'dropdown-right': position === 'right',
    'dropdown-hover': trigger === 'hover',
    'dropdown-open': trigger === isOpened,
  });

  const renderDropdownItems = () => {
    return items.map((item, index) => {
      return (
        <li key={index} onClick={item.onClick}>
          <a className={item.className}>{item.title}</a>
        </li>
      );
    });
  };

  return (
    <div className={dropdownClass}>
      {children}
      <ul className={cn('shadow menu dropdown-content bg-base-100 rounded-box w-52 overflow-y-auto', className)}>
        {renderDropdownItems()}
      </ul>
    </div>
  );
};

export default Dropdown;
