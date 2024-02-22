import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {data} from './mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App {...data} />
  </React.StrictMode>
);
