import React from 'react';
import { Route, Switch } from 'react-router';


import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Products from './components/products/Products';
import DetailCard from './components/detailCard/detailCard'

import './App.css';

function App() {
  
    return (
        <React.Fragment>
        <div className="App">
<<<<<<< HEAD
            <Switch>
                {/* <Route exact path='/' component={LandingPage} /> */}
                {/* Falta creear landingPage con login */}
                {/* <Route path='/' component={NavBar} /> */}
                <Route exact path='/' component={Home} />
=======

                 <Route path={'/'} component={NavBar} />
                 <Route path= {"/home"} component={HomePage} />
>>>>>>> 03d9363df78e876313ca06d46a3ba605706ca106
                <Route exact path='/products' component={Products} />
                <Route exact path='/products/:id' component={DetailCard} />
        </div>
        </React.Fragment>
    );
}

export default App;
