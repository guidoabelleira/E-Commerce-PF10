import style from './ShopCart.module.css';
import React, { useEffect } from 'react';
import{useDispatch, useSelector} from "react-redux"
import {NavLink as Link} from "react-router-dom"
import {removeShopCart, totalCart} from "../../redux/actions"
import removeProductShopCart from '../Hooks/removeProductShopCart';


function ShopCart() {
    const dispatch = useDispatch()
    let products = useSelector(state => state.shopProduct)
    let total = useSelector(state => state.totalCart)
    console.log("aca seria total: ",total);

    useEffect(() => {
        dispatch(totalCart(products))
    }, [dispatch, products])

    if(products){
        products = products?.filter(Boolean)
        return (
            <div className={style.container}>
            {products.map((e, i)=> {
                return <div key={i} >
                    <Link to={`/products/${e.id}`}>
                        <img src={e.image} alt="img" width="50px"  height="50px"/>
                    </Link>
                    <p>{e.name}</p>
                    <p>$ {e.price}</p>
                    <p> {e.count}</p>
                    <button type="button" className={style.bttn} onClick={a => dispatch(removeShopCart(removeProductShopCart(products, e)))}>Remove</button>
            </div>
            })}
            <div>
                <p>Total: $ {total}</p>
            </div>
            <div>
                <div className={style.container}>
                    <Link to="/shopcart/checkout">
                        <button type="button" ><p>Comprar!</p></button>
                    </Link>
                </div>
            </div>
        </div>
        
        
    )
} else {
    return (
        <div>
            <p>No Products Yet</p>
        </div>
    )
}
   
};

export default ShopCart;