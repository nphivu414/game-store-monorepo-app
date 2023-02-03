import React from 'react';
import cn from 'classnames';
import { AiTwotoneAppstore, AiFillTags } from 'react-icons/ai';
import { RiGameFill, RiShieldUserFill } from 'react-icons/ri';
import { IoGameController } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const ROUTES = {
  ROOT: '/',
  GAMES: '/games',
  GENRES: '/genres',
  TAGS: '/tags',
  PUBLISHERS: '/publishers',
};
const routeKeys = Object.keys(ROUTES);

const BottomTab: React.FC = () => {
  const pathname = usePathname();

  const renderTabIcon = (path: string) => {
    switch (path) {
      case ROUTES.ROOT:
        return <RiGameFill size={20} />;
      case ROUTES.GAMES:
        return <IoGameController size={20} />;
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
    return routeKeys.map((key) => {
      const path: string = ROUTES[key];
      const name = path.replace('/', '') || 'explore';
      const linkClass = cn({
        'flex flex-col justify-center w-full': true,
        active: pathname === path,
      });
      return (
        <li key={key} className="w-1/5">
          <Link href={path} className={linkClass}>
            {renderTabIcon(path)}
            <p className="text-2xs capitalize">{name}</p>
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="sticky bottom-0 overflow-hidden z-10 shadow">
      <ul className="menu compact w-full horizontal bg-neutral text-neutral-content">{renderTabItem()}</ul>
    </div>
  );
};

export default BottomTab;
