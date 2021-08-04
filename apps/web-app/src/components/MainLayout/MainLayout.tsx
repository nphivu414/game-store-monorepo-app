import * as React from 'react';
import { X } from 'react-feather';
import NavigationBar from 'src/components//NavigationBar';
import Button from 'src/components//Button';
import {ThemeContext} from 'src/context/theme';
import { Link } from 'react-router-dom';

const MainLayout: React.FC = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  const [isDrawerOpened, setIsDrawerOpened] = React.useState<boolean>(false);

  const handleToggleDrawer = React.useCallback(() => {
    setIsDrawerOpened(!isDrawerOpened);
  }, [isDrawerOpened]);

  const closeDrawer = () => {
    setIsDrawerOpened(false);
  };

  const renderDrawerMenu = () => {
    return (
      <ul className="menu p-4 overflow-y-auto w-[80%] bg-base-100 text-base-content">
        <li>
          <div className="flex justify-between items-center">
            <Link to="/">
              <p className="text-lg font-bold">Game Store</p>
            </Link>
            <Button isGhost isCircle onClick={closeDrawer}>
              <X />
            </Button>
          </div>
        </li>
        <li onClick={closeDrawer}>
          <a href={'/'}>Home</a>
        </li>
      </ul>
    );
  };

  return (
    <div className="bg-base-300 w-full flex-grow h-full drawer text-base-content" data-theme={theme}>
      <input type="checkbox" className="drawer-toggle" checked={isDrawerOpened} readOnly />
      <div className="flex flex-col flex-grow h-full drawer-content">
        <NavigationBar handleToggleDrawer={handleToggleDrawer} />
        <div className="w-full h-full overflow-y-auto px-4 pt-5 pb-5">
          {children}
        </div>
      </div>
      <div className="drawer-side">
        <label className="drawer-overlay" onClick={closeDrawer} />
        {renderDrawerMenu()}
      </div>
    </div>
  );
};

export default MainLayout;
