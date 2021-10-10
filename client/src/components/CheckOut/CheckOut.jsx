// import { useDispatch, useSelector } from "react-redux";
import {useAuth0} from "@auth0/auth0-react"
import LogoutButton from '../LoginButton/LoginButton';
import style from './checkOut.module.css';

export default function CheckOut (){
    const {isAuthenticated} = useAuth0();
    // const dispatch = useDispatch();
    // const state = useSelector(state => state.shopProduct);


    return isAuthenticated ? (
        <div className={style.container}>
            <h2>soy checkout</h2>
        </div>
    ) : (
        <div className={style.container}>
            <h2>Registrate para continuar con la compra</h2>
            <LogoutButton />
        </div>
    )
}