import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'
import App from './App';
import './redux/servise/i18next/i18next'
import store from './redux/store';
import "swiper/css/bundle";

import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
   
       <App />
      
    

  </Provider>
  
);

