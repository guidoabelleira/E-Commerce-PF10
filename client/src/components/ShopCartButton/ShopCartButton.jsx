import {useDispatch, useSelector } from 'react-redux';
import { NavLink as Link } from 'react-router-dom';
import style from "./ShopCartButton.module.css"
import cart from "../img/Car.png"
import { setCartLocalStorage } from '../../redux/actions';

export default function ShopCartButton(){
    const dispatch = useDispatch();
    let state = useSelector(state => state.shopProduct)
    
    // si state = 0, consulto en localstorage y cargo datos, si state > 0 no hago nada. 
    if(state?.length === 0){
        //get local storage
        const newState = JSON.parse(localStorage.getItem('shopCart'))
        
        if(newState){
            dispatch(setCartLocalStorage(newState.state));
        }
    } else {
        //set local storage
        localStorage.setItem('shopCart', JSON.stringify({state}))
    }
    state = state?.filter(Boolean)
    return(
        <div className={style.container}>
        <Link className={style.link} to="/shopcart">
            <button type="button" ><img src={cart} alt="cart" height="20px" width="20px"/><p>{state.length} Añadidos</p></button>
            </Link>
        </div>
    )
}