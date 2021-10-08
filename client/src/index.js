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


axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.render(
  <Auth0Provider
  domain="dev-816d1gr2.us.auth0.com"
  clientId="gscsxHy6KDgoEaQe9yFDB9rnGmMHMDi0" 
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
