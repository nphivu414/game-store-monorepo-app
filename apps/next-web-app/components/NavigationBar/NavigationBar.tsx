'use client';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import cn from 'classnames';
import { Button, ROUTES } from '@root/ui-web';
import { NavigationContext } from '../../context/navigation';
import { usePathname, useRouter } from 'next/navigation';

type NavigationBarProps = {
  isSticky?: boolean;
};

const routeKeys = Object.keys(ROUTES);

const checkIsMainPage = (path: string) => {
  return routeKeys.find((key) => ROUTES[key] === path);
};

const NavigationBar: React.FC<NavigationBarProps> = ({ isSticky }) => {
  const { back } = useRouter();
  const pathname = usePathname();
  const { title } = React.useContext(NavigationContext);
  const navbarClass = cn({
    sticky: isSticky,
  });

  const isMainPage = checkIsMainPage(pathname);

  const onBackButtonClick = () => {
    back();
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
    </div>
  );
};

export default NavigationBar;
