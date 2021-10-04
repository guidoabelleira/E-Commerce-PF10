import {useSelector } from 'react-redux';
import { NavLink as Link } from 'react-router-dom';
export default function ShopCartButton(){
    const state = useSelector(state => state.shopProduct)
    console.log(state, " hola")
    return(
        <div>
        <Link to="/shopCart">
            <p>{state.length} items added</p>
            </Link>
        </div>
    )
}