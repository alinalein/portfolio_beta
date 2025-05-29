import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './shared/context/AppContext';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Root element not found');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </HelmetProvider>
  </React.StrictMode>
);
