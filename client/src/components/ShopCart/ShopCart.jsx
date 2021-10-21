import style from './ShopCart.module.css';
import React, { useEffect } from 'react';
import{useDispatch, useSelector} from "react-redux"
import {NavLink as Link} from "react-router-dom"
import {removeShopCart,addPCart, totalCart} from "../../redux/actions"
import removeProductShopCart from '../Hooks/removeProductShopCart';



function ShopCart() {
    const dispatch = useDispatch()
    let products = useSelector(state => state.shopProduct)
    let total = useSelector(state => state.totalCart)

    useEffect(() => {
        dispatch(totalCart(products))
    }, [dispatch, products])

    if(products){
        products = products?.filter(Boolean)
        return (
            <div className={style.container}>
            {products.map((e, i)=> {
                return <div key={i} className={style.product} >
                    <Link to={`/products/${e.id}`}>
                        <img src={e.image} alt="img" width="50px"  height="50px"/>
                    </Link>
                    <p className={style.tittle}>{e.name}</p>
                    <p className={style.price}>${e.price}</p>
                    <div className={style.agregar}>
                    <button  type="button" className={style.bttn} onClick={a=> dispatch(addPCart(e, products))}> + </button>
                    <p className={style.count}> {e.count}</p>
                    <button type="button" className={style.bttn} onClick={a => dispatch(removeShopCart(removeProductShopCart(products, e)))}>-</button>
                    </div>
            </div>
            })}
            <div>
                <p className={style.total}>Total: $ {total}</p>
            </div>
            <div>
                <div className={style.container}>
                    <Link to="/shopcart/checkout">
                        <button className={style.comprar} type="button" ><p>Comprar!</p></button>
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