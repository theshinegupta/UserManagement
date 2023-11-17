// index.js or another entry point file
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const root = createRoot(document.getElementById('root')); // Use createRoot

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
