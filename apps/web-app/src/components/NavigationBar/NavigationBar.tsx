import * as React from 'react';
import { Bell, ChevronDown, Aperture } from 'react-feather';
import Button from 'src/components//Button';
import Dropdown, { DropdownItem } from 'src/components//Dropdown';
import { Menu } from 'react-feather';
import { ThemeContext, ThemeValue } from 'src/context/theme';
import cn from 'classnames';

type NavigationBarProps = {
  handleToggleDrawer: () => void;
};

const NavigationBar: React.FC<NavigationBarProps> = ({ handleToggleDrawer }) => {
  const { changeTheme, theme, themeList } = React.useContext(ThemeContext);

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
            <Aperture size={22} className="mx-1" />
            <div className="hidden rounded-full m-1">Change Theme</div>
          </div>
          <div className="flex items-center">
            <ChevronDown size="22" />
          </div>
        </Button>
      </Dropdown>
    );
  };

  return (
    <div className="navbar px-0">
      <div className="flex-none mr-3">
        <Button isLink isSquare isGhost size="extra-small" onClick={handleToggleDrawer}>
          <Menu size={24} />
        </Button>
      </div>
      <div className="flex-none">
        <span className="text-lg font-bold">Game Store</span>
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
