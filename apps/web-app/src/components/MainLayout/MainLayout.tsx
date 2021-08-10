import * as React from 'react';
import NavigationBar from 'src/components//NavigationBar';
import { ThemeContext } from 'src/context/theme';

const MainLayout: React.FC = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="bg-base-300 min-h-screen max-w-sm text-base-content m-auto" data-theme={theme}>
      <NavigationBar />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
