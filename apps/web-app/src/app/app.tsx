import { ThemeProvider } from '../context/theme/theme-provider';
import Home from 'src/pages/Home';
import MainLayout from 'src/components//MainLayout';

export function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Home/>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
