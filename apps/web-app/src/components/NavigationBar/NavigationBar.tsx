import * as React from 'react';
import { FiChevronDown, FiArrowLeft } from 'react-icons/fi';
import { CgDarkMode } from 'react-icons/cg';
import Helmet from 'react-helmet';
import { ThemeContext, ThemeValue } from 'src/context/theme';
import cn from 'classnames';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationContext } from 'src/context/navigation';
import { ROUTES } from 'src/routes/routes';
import { Button, Dropdown, DropdownItem } from '@game-store-monorepo/ui-web';

type NavigationBarProps = {
  isSticky?: boolean;
};

const routeKeys = Object.keys(ROUTES);

const checkIsMainPage = (path: string) => {
  return routeKeys.find((key) => ROUTES[key] === path);
};

const NavigationBar: React.FC<NavigationBarProps> = ({ isSticky }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { changeTheme, theme, themeList } = React.useContext(ThemeContext);
  const { title } = React.useContext(NavigationContext);
  const navbarClass = cn({
    sticky: isSticky,
  });

  const isMainPage = checkIsMainPage(pathname);

  const onBackButtonClick = () => {
    navigate(-1);
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
        <Button isRounded isGhost className="px-0" size="small">
          <div className="flex items-center">
            <CgDarkMode size={22} className="mx-1" />
          </div>
          <div className="flex items-center">
            <FiChevronDown size="22" />
          </div>
        </Button>
      </Dropdown>
    );
  };

  return (
    <div
      className={cn('navbar w-full bg-neutral text-neutral-content justify-between top-0 z-20 shadow-lg', navbarClass)}
    >
      <div className="w-[80%]">
        <div className="mr-3">
          {isMainPage ? null : (
            <Button isSquare isGhost size="small" onClick={onBackButtonClick}>
              <FiArrowLeft size={24} />
            </Button>
          )}
        </div>
        <p className="text-lg font-bold truncate">{title}</p>
      </div>
      <div>{renderThemeDropDown()}</div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </div>
  );
};

export default NavigationBar;
