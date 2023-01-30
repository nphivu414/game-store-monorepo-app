import { ThemeContext } from '@root/ui-web';
import * as React from 'react';

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  console.log('🚀 ~ file: MainLayout.tsx:10 ~ theme', theme);
  return (
    <div className="bg-base-300 md:max-w-sm text-base-content m-auto" data-theme={'night'}>
      <div className="min-h-screen">{children}</div>
    </div>
  );
};

export default MainLayout;
