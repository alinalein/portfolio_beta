import { HashRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { NavigationView } from './features';
import MainRoutes from './routes/MainRoutes';

import { useAppContext, Background } from './shared';

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
