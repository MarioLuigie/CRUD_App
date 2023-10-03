import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App.jsx';
import Provider from "./Store/TaskContext.jsx";

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
