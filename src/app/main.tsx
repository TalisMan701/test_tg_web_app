import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '~shared/assets/styles/globals.scss';
import {WebAppProvider} from '@vkruglikov/react-telegram-web-app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WebAppProvider
      options={{
        smoothButtonsTransition: true,
      }}
    >
      <App />
    </WebAppProvider>
  </React.StrictMode>,
);
