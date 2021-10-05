import {useSelector } from 'react-redux';
import { NavLink as Link } from 'react-router-dom';
import style from "./ShopCartButton.module.css"
import cart from "../img/Car.png"

export default function ShopCartButton(){
    const state = useSelector(state => state.shopProduct)
    
    return(
        <div className={style.container}>
        <Link className={style.link} to="/shopCart">
            <button type="button" ><img src={cart} height="20px" width="20px"/><p>{state.length} Añadidos</p></button>
            </Link>
        </div>
    )
}