import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './ducks/store';

// WRAPPING THE APP COMPONENT IN THE PROVIDER COMPONENT GIVES THE ENTIRE APPLICATION ACCESS TO WHATEVER IS IN THE STORE, BECAUSE WE PASS IN THE STORE AS A PROP TO THE PROVIDER, AND WRAP OUR PROVIDER AROUND OUR APP
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
