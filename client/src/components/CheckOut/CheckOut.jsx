import { useDispatch, useSelector } from "react-redux";
import {useAuth0} from "@auth0/auth0-react"
//importar action postOrder
import LogoutButton from '../LoginButton/LoginButton';
import style from './checkOut.module.css';
// import Loading from "../Loading/Loading";
import axios from "axios";
import { POST_MERCADOPAGO, USER_LOAD } from "../../constantes";
import { clearCart, totalCart } from "../../redux/actions";

export default function CheckOut (){
    const dispatch = useDispatch();
    const {isAuthenticated} = useAuth0();
    const cartCheckOut = useSelector(state => state.shopProduct);
    const totalCheckOut = useSelector(state => state.totalCart);
    console.log("carrito previo checkout: ", cartCheckOut);

    const products = {orderBody: cartCheckOut};
    
    console.log("products: ", products)
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
    async function checkOut(products){
        console.log("checkout products: ", products)
        let id = localStorage.getItem('idUser');
        console.log("aca id checkout: ",id)
        if(id){
            // destructuro el estado
            let created = await axios.post(USER_LOAD + id + '/carrito');
            console.log("respuesta creacion carrito: ", created.data);
            
            let pushProduct = await axios.post(USER_LOAD + id + '/cart', products);
            console.log("respuesta envio de carrito: ", pushProduct.data);
            alert(pushProduct.data);
            let idCart = 2;
            let getCart = await axios.get(USER_LOAD + idCart + '/cart');
            console.log("respuesta get carrito: ", getCart.data)

            
            let check = {state:'Processing', totalPrice: totalCheckOut}
            let orderLine = await axios.put('/orders/checkout/' + idCart, check);
            alert(orderLine.data);

            let cartMercadoPago = products.orderBody;
            let mercadoPagoRes = await axios.post(POST_MERCADOPAGO , cartMercadoPago)
            // console.log("Mercadopago: ", mercadoPagoRes.data)
            window.open(mercadoPagoRes.data, '_blank')
            localStorage.removeItem('shopCart')
            dispatch(clearCart());
            dispatch(totalCart(0));
            

        } else {
            alert("algo salio mal!")
        }
    }

    return isAuthenticated ? (
        <div className={style.container}>
            <h2>soy checkout</h2>
            <p>Total a pagar: ${totalCheckOut}</p>
            <button onClick={e => checkOut(products,totalCheckOut)}>MercadoPago</button>
        </div>
    ) : (
        <div className={style.container}>
            <h2>Registrate para continuar con la compra</h2>
            <LogoutButton />
        </div>
    )
}