import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import Provider from "./Store/TaskContext";

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
)
