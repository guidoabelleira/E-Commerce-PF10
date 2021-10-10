import { useSelector } from "react-redux";
import {useAuth0} from "@auth0/auth0-react"
//importar action postOrder
import LogoutButton from '../LoginButton/LoginButton';
import style from './checkOut.module.css';

export default function CheckOut (){
    const {isAuthenticated} = useAuth0();
    const totalCheckOut = useSelector(state => state.totalCart)
    
    return isAuthenticated ? (
        <div className={style.container}>
            <h2>soy checkout</h2>
            <p>Total a pagar: ${totalCheckOut}</p>
            <button onClick={e => alert("redirect mercado pago")}>MercadoPago</button>
        </div>
    ) : (
        <div className={style.container}>
            <h2>Registrate para continuar con la compra</h2>
            <LogoutButton />
        </div>
    )
}