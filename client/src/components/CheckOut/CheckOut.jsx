import { useDispatch, useSelector } from "react-redux";
import {useAuth0} from "@auth0/auth0-react"
//importar action postOrder
import LogoutButton from '../LoginButton/LoginButton';
import style from './checkOut.module.css';
// import Loading from "../Loading/Loading";
import axios from "axios";
import { POST_MERCADOPAGO, USER_LOAD } from "../../constantes";
import { clearCart, totalCart } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function CheckOut (){
    const dispatch = useDispatch();
    const {isAuthenticated} = useAuth0();
    const cartCheckOut = useSelector(state => state.shopProduct);
    const totalCheckOut = useSelector(state => state.totalCart);
    const userState = useSelector(state => state.user[0])
    // console.log("carrito previo checkout: ", cartCheckOut);

    const products = {orderBody: cartCheckOut};
    
    // console.log("products: ", products)
    // let id = localStorage.getItem('idUser');
    // const checkOutState = preCheckOut(cartCheckOut);

    // async function preCheckOut(cartCheckOut){
    //     // se envian los datos a db y esperamos respuesta ok o failed, devuelvo un booleano.
    //     let state = true;

    //     return state
    // }

    async function checkOut(products){
        // console.log("checkout products: ", products)
        let id = localStorage.getItem('idUser');
        // console.log("aca id checkout: ",id)
        if(id){
            // destructuro el estado
            // let created = await axios.post(USER_LOAD + id + '/carrito');
            // console.log("respuesta creacion carrito: ", created.data[0]);
            
            let pushProduct = await axios.post(USER_LOAD + id + '/cart', products);
            // console.log("respuesta envio de carrito: ", pushProduct.data);
            // alert(pushProduct.data);
            
            let idCart = pushProduct.data[0];
            // console.log("idCart: ", idCart.id);

            await axios.get(USER_LOAD + idCart.id + '/cart');
            // console.log("respuesta get carrito: ", getCart.data)

            
            let check = {state:'Processing', totalPrice: totalCheckOut}
            await axios.put('/orders/checkout/' + idCart.id, check);
            // alert(orderLine.data);

            
            let email = {
                user: {
                    name: userState?.name,
                    lastname: userState?.lastname,
                    email: userState?.email
                },
                info: {
                    orderId: idCart,
                    totalPrice: totalCheckOut
                }
            }
            let resEmail = await axios.post('sendEmail/orderCreated', email)
            console.log(resEmail)
            //Endpoint ---> http://localhost:3001/sendEmail/orderCreated


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
            <div>
                <h2>Su pedido: </h2>
            </div>
            <div>
                <h3>Direccion de envio</h3>
                {userState?.address ? (
                    <div>
                        <p>
                            <p>{userState.address}</p>
                            <Link to="/Profile">
                                Cambiar
                            </Link>
                        </p>
                        <br/>
                        <p>Total a pagar: ${totalCheckOut}</p>
                        <button onClick={e => checkOut(products,totalCheckOut)} className={style.mp}>MercadoPago</button>
                    </div>
                ) : (
                    <div>
                        <p>Aun no registro su direccion de envio</p>
                        <br/>
                        <Link to="/Profile">
                            <button type="button" className={style.bttn}>
                                Confirmar direccion de envio
                            </button>
                        </Link>
                    </div>
                )}
                
            </div>
            
            
        </div>
    ) : (
        <div className={style.container}>
            <h2>Registrate para continuar con la compra</h2>
            <LogoutButton />
        </div>
    )
}