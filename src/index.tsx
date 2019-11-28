import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

import { PeiliProvider } from './context/context';
import { UserContextProvider } from './context/userContext';
import { AuthContextProvider } from './context/authContext';

ReactDOM.render(
  <AuthContextProvider>
    <UserContextProvider>
      <PeiliProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PeiliProvider>
    </UserContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
