import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { AiTwotoneAppstore, AiFillTags } from 'react-icons/ai';
import { RiGameFill, RiShieldUserFill } from 'react-icons/ri';
import { ROUTES } from 'src/routes/routes';

const BottomTab: React.FC = () => {
  const { pathname } = useLocation();

  const renderTabIcon = (path: string) => {
    switch (path) {
      case ROUTES.ROOT:
        return <RiGameFill size={20} />;
      case ROUTES.GENRES:
        return <AiTwotoneAppstore size={20} />;
      case ROUTES.TAGS:
        return <AiFillTags size={20} />;
      case ROUTES.PUBLISHERS:
        return <RiShieldUserFill size={20} />;
      default:
        return null;
    }
  };

  const renderTabItem = () => {
    return Object.keys(ROUTES).map((key) => {
      const path: string = ROUTES[key];
      if (path === ROUTES.GAMES) {
        return null;
      }
      const name = path.replace('/', '') || 'explore';
      const linkClass = cn({
        'flex flex-col justify-center': true,
        active: pathname === path,
      });
      return (
        <li>
          <Link to={path} className={linkClass}>
            {renderTabIcon(path)}
            <p className="text-2xs capitalize">{name}</p>
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="sticky bottom-0 overflow-hidden z-10">
      <ul className="menu compact justify-center flex-none w-full px-3 horizontal bg-base-100">{renderTabItem()}</ul>
    </div>
  );
};

export default BottomTab;
