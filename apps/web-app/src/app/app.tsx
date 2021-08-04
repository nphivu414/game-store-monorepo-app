import { ThemeProvider } from '../context/theme/theme-provider';
import MainLayout from 'src/components//MainLayout';
import {
  BrowserRouter,
} from "react-router-dom";
import Routes from 'src/routes';

export function App() {
  return (
    <ThemeProvider>
      <div className="flex justify-center pt-4">
        <div className="mockup-phone">
          <div className="camera"></div> 
          <div className="display">
            <div className="relative flex flex-col overflow-hidden shadow rounded-box artboard phone-x">
              <BrowserRouter>
                <MainLayout>
                  <Routes/>
                </MainLayout>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
