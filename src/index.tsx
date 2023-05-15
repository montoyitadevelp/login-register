import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store';
import { ThemeConfig } from './config/themeConfig';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </Provider>

  </React.StrictMode>
);


