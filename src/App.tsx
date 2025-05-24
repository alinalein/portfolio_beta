import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import NavigationView from './features/navigation/views/NavigationView';
import Background from './shared/components/Background';
import MainRoutes from './routes/MainRoutes';
import { Helmet } from 'react-helmet-async';
import { useAppContext } from './shared/context/AppContext';
import './App.css';
import './shared/styles/_accessibility.scss';

function App(): JSX.Element {
  const { language } = useAppContext();

  return (
    <>
      <Helmet>
        <html lang={language} />
      </Helmet>
      <HashRouter>
        <div className="app_container">
          <Background />
          <NavigationView />
          <div className="route_container">
            <MainRoutes />
          </div>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
