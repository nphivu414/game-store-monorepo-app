import * as React from 'react';
import { FiMenu, FiChevronDown, FiAperture, FiArrowLeft } from 'react-icons/fi';
import Button from 'src/components//Button';
import Dropdown, { DropdownItem } from 'src/components//Dropdown';
import { ThemeContext, ThemeValue } from 'src/context/theme';
import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';
import { NavigationContext } from 'src/context/navigation';

type NavigationBarProps = {
  handleToggleDrawer: () => void;
};

const NavigationBar: React.FC<NavigationBarProps> = ({ handleToggleDrawer }) => {
  const { goBack } = useHistory();
  const { pathname } = useLocation();
  const { changeTheme, theme, themeList } = React.useContext(ThemeContext);
  const { title } = React.useContext(NavigationContext);

  const isRoot = pathname === '/';

  const onBackButtonClick = () => {
    goBack();
  };

  const onThemeChange = React.useCallback(
    (theme: ThemeValue) => {
      return () => {
        changeTheme(theme);
      };
    },
    [changeTheme],
  );

  const themeDropdownItems = React.useMemo((): DropdownItem[] | null => {
    if (!themeList) {
      return null;
    }

    return themeList?.map(({ icon, label, value }) => {
      return {
        title: (
          <div>
            <span className="mr-3">{icon}</span>
            {label}
          </div>
        ),
        onClick: onThemeChange(value),
        className: cn({
          active: theme === value,
        }),
      };
    });
  }, [onThemeChange, theme, themeList]);

  const renderThemeDropDown = () => {
    if (!themeDropdownItems) {
      return null;
    }

    return (
      <Dropdown items={themeDropdownItems} trigger="hover" className="max-h-96">
        <Button isRounded isGhost className="px-0">
          <div className="flex items-center">
            <FiAperture size={22} className="mx-1" />
            <div className="hidden rounded-full m-1">Change Theme</div>
          </div>
          <div className="flex items-center">
            <FiChevronDown size="22" />
          </div>
        </Button>
      </Dropdown>
    );
  };

  return (
    <div className="navbar w-full pt-6 bg-neutral text-neutral-content">
      <div className="flex-none mr-3">
        {isRoot ? (
          <Button isSquare isGhost size="small" onClick={handleToggleDrawer}>
            <FiMenu size={24} />
          </Button>
        ) : (
          <Button isSquare isGhost size="small" onClick={onBackButtonClick}>
            <FiArrowLeft size={24} />
          </Button>
        )}
      </div>
      <div className="flex-none">
        <span className="text-lg font-bold">{title}</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden">
          <Button isGhost isRounded className="text-base mr-2">
            Home
          </Button>
        </div>
      </div>
      <div className="flex-none align-middle">{renderThemeDropDown()}</div>
    </div>
  );
};

export default NavigationBar;
