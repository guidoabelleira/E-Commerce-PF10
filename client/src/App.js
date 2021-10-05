import React from 'react';
import { Route, Switch } from 'react-router';


import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Products from './components/products/Products';
import DetailCard from './components/detailCard/detailCard';
import ShopCart from './components/ShopCart/ShopCart';
import AddProduct from './components/CreateProductForm/Form';
import AboutUs from './components/AboutUs/AboutUs';

import './App.css';

function App() {
  
    return (
        <React.Fragment>
        <div className="container">
            <div className="row">
                <Route path={'/'} component={NavBar} />
                </div>
                <div>
                <Route path= {"/home"} component={HomePage} />
                <Route exact path={"/products"} component={Products} />
                <Route exact path={"/products/:id"} component={DetailCard} />
                <Route exact path={"/shopcart"} component={ShopCart} />
                <Route exact path={"/addProduct"} component={AddProduct} />
                <Route exact path={"/about"} component={AboutUs} />
                </div>
        </div>
        </React.Fragment>
    );
}

export default App;
