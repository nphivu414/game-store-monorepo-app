import { BottomTab, ThemeContext } from '@root/ui-web';
import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="bg-base-300 md:max-w-sm text-base-content m-auto" data-theme={theme}>
      <NavigationBar isSticky />
      <div className="min-h-screen">{children}</div>
      <BottomTab />
    </div>
  );
};

export default MainLayout;
