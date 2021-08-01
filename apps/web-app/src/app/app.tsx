import { ThemeProvider } from '../context/theme/theme-provider';
import Home from 'src/pages/Home';
import MainLayout from 'src/components//MainLayout';

export function App() {
  return (
    <ThemeProvider>
      <div className="flex justify-center pt-4">
        <div className="mockup-phone">
          <div className="camera"></div> 
          <div className="display">
            <div className="artboard phone-x artboard-demo">
              <MainLayout>
                <Home/>
              </MainLayout>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
