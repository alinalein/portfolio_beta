import { HashRouter } from 'react-router-dom';
import NavigationView from './features/navigation/views/NavigationView';
import Background from './shared/components/Background';
import MainRoutes from './routes/MainRoutes';
import { AppProvider } from './shared/context/AppContext';
import './App.css';

function App(): JSX.Element {

    return (
        <AppProvider>
            <HashRouter>
                <div className="app_container">
                    <Background />
                    <NavigationView
                    />
                    <div className='route_container'>
                        <MainRoutes
                        />
                    </div>
                </div>
            </HashRouter>
        </AppProvider>
    );
}

export default App;
