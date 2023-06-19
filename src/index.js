import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './app/store';
const appStyle = {
  backgroundColor: "#2c3e50",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);


