import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '~shared/assets/styles/globals.scss';
import {WebAppProvider} from '@vkruglikov/react-telegram-web-app';
import {Provider} from 'react-redux';
import {setupStore} from '~shared/redux/redux-store';

export const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <WebAppProvider
      options={{
        smoothButtonsTransition: true,
      }}
    >
      <App />
    </WebAppProvider>
  </Provider>,
);
