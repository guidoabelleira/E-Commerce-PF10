import { useSelector } from "react-redux";
import {useAuth0} from "@auth0/auth0-react"
//importar action postOrder
import LogoutButton from '../LoginButton/LoginButton';
import style from './checkOut.module.css';
// import Loading from "../Loading/Loading";
import axios from "axios";
import { USER_LOAD } from "../../constantes";

export default function CheckOut (){
    const {isAuthenticated} = useAuth0();
    const cartCheckOut = useSelector(state => state.shopProduct);
    const totalCheckOut = useSelector(state => state.totalCart);
    console.log("carrito previo checkout: ", cartCheckOut);

    const product = {
        quantity: cartCheckOut[0].count,
        productId: cartCheckOut[0].id
    }
    console.log("produt unitario: ", product)
    // let id = localStorage.getItem('idUser');
    // const checkOutState = preCheckOut(cartCheckOut);

    // async function preCheckOut(cartCheckOut){
    //     // se envian los datos a db y esperamos respuesta ok o failed, devuelvo un booleano.
    //     let state = true;

    //     return state
    // }

    // primero router.post("/:idUser/carrito" genero carrito usuario. solo mando id
    // segundo router.post("/:idUser/cart" paso por item los productos
    // tercero router.get("/:idUser/cart" traigo carrito
    // router.put("/checkout/:id" cambio estado carrito
    // cuarto router.get("/:idUser/checkout"
    // console.log(id)
    async function checkOut(cartCheckOut, product){
        console.log("carrito checkout: ", cartCheckOut)
        let id = localStorage.getItem('idUser');
        console.log("aca id checkout: ",id)
        if(id){
            // destructuro el estado
            let created = await axios.post(USER_LOAD + id + '/carrito');
            console.log("respuesta creacion carrito: ", created.data);
            let pushProduct = await axios.post(USER_LOAD + id + '/cart', product);
            console.log("respuesta producto: ", pushProduct.data);
        } else {
            alert("algo salio mal!")
        }
    }

    return isAuthenticated ? (
        <div className={style.container}>
            <h2>soy checkout</h2>
            <p>Total a pagar: ${totalCheckOut}</p>
            <button onClick={e => checkOut(cartCheckOut, product)}>MercadoPago</button>
        </div>
    ) : (
        <div className={style.container}>
            <h2>Registrate para continuar con la compra</h2>
            <LogoutButton />
        </div>
    )
}