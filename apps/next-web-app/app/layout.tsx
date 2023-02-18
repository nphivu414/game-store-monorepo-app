import BottomTab from '../components/BottomTab';
import NavigationBar from '../components/NavigationBar';
import { NavigationProvider } from '../context/navigation/navigation-provider';
import AppProvider from './AppProvider';
import './styles.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="bg-base-300 md:max-w-sm text-base-content m-auto" data-theme="night">
          <NavigationProvider>
            <NavigationBar isSticky />
            <AppProvider>{children}</AppProvider>
          </NavigationProvider>
          <BottomTab />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
