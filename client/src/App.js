import React from 'react';
import { Route } from 'react-router';
import {useAuth0} from "@auth0/auth0-react"

import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Products from './components/products/Products';
import DetailCard from './components/detailCard/detailCard';
import ShopCart from './components/ShopCart/ShopCart';
import AboutUs from './components/AboutUs/AboutUs';
import Profile from "./components/Profile/Profile"
import ContactUs from './components/ContactUs/ContactUs';
// import Error404 from './components/Error404/Error404';
import NavBarAdminProducts from './components/NavBarAdminProducts/NavBarAdminProducts';
import AdminProducts from './components/AdminProducts/AdminProducts';
import AddProduct from './components/CreateProductForm/Form';
import AddCategories from './components/CreateCategoryForm/CategoryForm';
import Stock from './components/StockProduct/StockProduct';
import Orders from './components/Orders/Orders';
import CheckOut from './components/CheckOut/CheckOut';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import PreLoadUpdateProduct from './components/UpdateProduct/PreLoadUpdateProduct';
import AddReview from './components/AddReview/AddReview';
import PreLoadAddReview from './components/AddReview/PreLoadAddReview'
import AdminOrders from './components/OrdersAdmin/OrdersAdmin';
import LandingPage from './components/LandingPage/LandingPage';
import Tiket from './components/Tiket/Tiket';

import { authenticatedUserDb } from './components/Hooks/users';


import './App.css';


function App() {
    const {isAuthenticate, user} = useAuth0();
    // const userDB = useSelector(state => state.user[0])
    
    if(user){
        authenticatedUserDb(user);
    }

    return (
        <React.Fragment>
            <div className="container">
                <Route exact path={"/profile"} component={Profile}/>
                    {isAuthenticate? (
                        <>
                        <div className="row">
                            <Route path={'/'} component={NavBar} />
                        </div>
                        <div>
                            <Route exact path={'/'} component={LandingPage} />
                            <Route path= {"/home"} component={HomePage} />
                            <Route exact path={"/products"} component={Products} />
                            <Route exact path={"/addproduct"} component={AdminProducts} />
                            <Route exact path={"/products/:id"} component={DetailCard} />
                            <Route exact path={"/shopcart"} component={ShopCart} />
                            <Route exact path={'/shopcart/checkout'} component={CheckOut} />
                            <Route exact path={"/about"} component={AboutUs} />
                            <Route path={'/adminproducts'} component={NavBarAdminProducts} />
                            <Route exact path={'/adminproducts'} component={AdminProducts} />
                            <Route exact path={'/adminproducts/addproduct'} component={AddProduct} />
                            <Route exact path={'/adminproducts/addcategories'} component={AddCategories} />
                            <Route exact path={'/adminproducts/stock'} component={Stock} />
                            <Route exact path={'/order'} component={Orders} />
                            <Route exact path={'/tiket/:id'} component={Tiket} />
                            <Route exact path={'/orderadmin'} component={AdminOrders} />
                            <Route exact path={'/adminproducts/editProduct'} component={UpdateProduct} />
                            <Route exact path={'/adminproducts/PreLoadUpdateProduct'} component={PreLoadUpdateProduct} />
                            <Route exact path={'/adminproducts/addReview'} component={AddReview} />
                            <Route exact path={'/adminproducts/PreLoadAddReview'} component={PreLoadAddReview} />
                            {/* <Route path={"*"} component={Error404} /> */}
                        </div>
                        </>
                        ):(
                        <>
                            <Route path={'/'} component={NavBar} />
                            <Route exact path={'/'} component={LandingPage} />
                            <Route path= {"/home"} component={HomePage} />
                            <Route exact path={"/products"} component={Products} />
                            <Route exact path={"/products/:id"} component={DetailCard} />
                            <Route exact path={"/shopcart"} component={ShopCart} />
                            <Route exact path={'/shopcart/checkout'} component={CheckOut} />
                            <Route exact path={"/about"} component={AboutUs} />
                            <Route exact path={"/contact"} component={ContactUs} />
                            <Route path={'/adminproducts'} component={NavBarAdminProducts} />
                            <Route exact path={'/adminproducts'} component={AdminProducts} />
                            <Route exact path={'/adminproducts/addproduct'} component={AddProduct} />
                            <Route exact path={'/adminproducts/addcategories'} component={AddCategories} />
                            <Route exact path={'/adminproducts/stock'} component={Stock} />
                            <Route exact path={'/order'} component={Orders} />
                            <Route exact path={'/tiket/:id'} component={Tiket} />
                            <Route exact path={'/orderadmin'} component={AdminOrders} />
                            <Route exact path={'/adminproducts/editProduct'} component={UpdateProduct} />
                            <Route exact path={'/adminproducts/PreLoadUpdateProduct'} component={PreLoadUpdateProduct} />
                            <Route exact path={'/adminproducts/addReview'} component={AddReview} />
                            <Route exact path={'/adminproducts/PreLoadAddReview'} component={PreLoadAddReview} />
                            {/* <Route path={"*"} component={Error404} /> */}
                        </>
                        )}
            </div>
        </React.Fragment>
    );
}

export default App;
