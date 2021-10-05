import React from 'react';
import { Route, Switch } from 'react-router';


import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Products from './components/products/Products';
import DetailCard from './components/detailCard/detailCard';
import ShopCart from './components/ShopCart/ShopCart';
import AddProduct from './components/CreateProductForm/Form';
import AboutUs from './components/AboutUs/AboutUs';
import {useAuth0} from "@auth0/auth0-react"
import Profile from "./components/Profile/Profile"
import './App.css';

function App() {
  const {isAuthenticate} = useAuth0();
    return (
        <React.Fragment>
        <div className="container">
        <Route exact path={"/profile"} component={Profile}/>
        {isAuthenticate? (<>
            <div className="row">
                <Route path={'/'} component={NavBar} />
                </div>
                <div>
                <Route path= {"/home"} component={HomePage} />
                <Route exact path={"/products"} component={Products} />
                <Route exact path={"/products/:id"} component={DetailCard} />
                <Route exact path={"/shopcart"} component={ShopCart} />
                <Route exact path={"/about"} component={AboutUs} />
                <Route exact path={"/addProduct"} component={AddProduct} />
                </div></>):(<>
                    <Route path={'/'} component={NavBar} />
                 <Route path= {"/home"} component={HomePage} />
                 <Route exact path={"/products"} component={Products} />
                 <Route exact path={"/products/:id"} component={DetailCard} />
                 <Route exact path={"/shopcart"} component={ShopCart} />
                 <Route exact path={"/about"} component={AboutUs} />
                 </>)}
        </div>
        </React.Fragment>
    );
}

export default App;
