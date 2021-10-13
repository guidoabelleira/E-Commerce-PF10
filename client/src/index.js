import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import { Auth0Provider } from "@auth0/auth0-react";
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
require('dotenv').config()

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
// axios.defaults.baseURL = "http://localhost:3001" || "https://ecommerce-pf-10.herokuapp.com";

// AUTH0_DOMAIN=dev-s40eclcq.us.auth0.com
// AUTH0_CLIENT_ID=TgAyzRWUfdI2TzdahNvTSQ2xoFTHra2u

  // domain="dev-816d1gr2.us.auth0.com"
  // clientId="gscsxHy6KDgoEaQe9yFDB9rnGmMHMDi0" 
// const {AUTH0_DOMAIN } = process.env
// const domain = process.env.AUTH0_DOMAIN;
// const clientId = process.env.AUTH0_CLIENT_ID;

// console.log(AUTH0_DOMAIN)
// console.log(process.env.DB_USER)

ReactDOM.render(
  <Auth0Provider
  domain="dev-s40eclcq.us.auth0.com"
  clientId="TgAyzRWUfdI2TzdahNvTSQ2xoFTHra2u"
  redirectUri={window.location.origin}
>
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
