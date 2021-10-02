import React from 'react';
import { Route, Switch } from 'react-router';


import Home from './components/home/Home';
import NavBar from './components/NavBar/NavBar';
import Products from './components/products/Products';
import DetailCard from './components/detailCard/detailCard'

import './App.css';

function App() {
    return (
        <div className="App">
            <Switch>
                {/* <Route exact path='/' component={LandingPage} /> */}
                {/* Falta creear landingPage con login */}
                {/* <Route path='/' component={NavBar} /> */}
                <Route exact path='/' component={Home} />
                <Route exact path='/products' component={Products} />
                <Route exact path='/products/:id' component={DetailCard} />
                {/* <Route exact path='/profile:id' component={Profile} /> */}
                {/* Falta crear profile */}
                {/* <Route exact path='/contactUs' component={ContactUs} /> */}
                {/* Falta crear contactUs */}
                {/* <Route component={PageNotFound} /> */}
                {/* Falta crear PageNotFound */}
            </Switch>
        </div>
    );
}

export default App;
