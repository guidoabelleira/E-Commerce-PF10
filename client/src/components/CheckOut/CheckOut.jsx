import { useSelector } from "react-redux";
import {useAuth0} from "@auth0/auth0-react"
//importar action postOrder
import LogoutButton from '../LoginButton/LoginButton';
import style from './checkOut.module.css';
import Loading from "../Loading/Loading";

export default function CheckOut (){
    const {isAuthenticated} = useAuth0();
    const cartCheckOut = useSelector(state => state.shopProduct);
    const totalCheckOut = useSelector(state => state.totalCart);
    const checkOutState = preCheckOut(cartCheckOut);

    async function preCheckOut(cartCheckOut){
        // se envian los datos a db y esperamos respuesta ok o failed, devuelvo un booleano.
        let state = true;

        return state
    }

    async function checkOut(){
        alert("redirect mercado pago");
    }

    return isAuthenticated ? (
        <div className={style.container}>
            <h2>soy checkout</h2>
            <p>Total a pagar: ${totalCheckOut}</p>
            {checkOutState === true? <button onClick={e => checkOut()}>MercadoPago</button> : <Loading />}
        </div>
    ) : (
        <div className={style.container}>
            <h2>Registrate para continuar con la compra</h2>
            <LogoutButton />
        </div>
    )
}