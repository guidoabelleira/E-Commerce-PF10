import React from "react";
import { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from '../../redux/actions';

import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

import style from "./tiket.module.css"
import AddReview from "../AddReview/AddReview";


export default function Tiket (props) {
    let aux = props.match.params.id;
    // console.log("Aux: ",aux)
    const dispatch = useDispatch();
    // const history = useHistory();
    // console.log("history: ", history)
    
    const orderId = useSelector(state => state.orderById);
    // console.log("orderID ",orderId)
    // console.log(orderId.orderId);
    // console.log(orderId.totalPrice)
    useEffect(() => {
        dispatch(getOrderById(aux));
    }, [dispatch, aux]);

    return orderId ? (
    
        <div className={style.container}>
            <div >
                <h2 className={style.title}> N° de orden: {orderId.orderId}</h2>
                <h3>Fecha: {orderId.createdAt}</h3>
                <h3>Estado: </h3>
                <div>
                    <ul>
                        {orderId?.product?.map(e => {
                            return (
                                <li key={e.id}>
                                    <p>Artículo: {e.name}</p>
                                    <p>Cantidad: {e.orderline.quantity}u.</p>
                                    <p>Precio unitario: ${e.price}</p>
                                    <p>Subtotal: ${e.orderline.subtotal}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <br/>
                <div >
                    <p> 
                        <b>Precio Total: $</b>{orderId.totalPrice}
                    </p>
                </div>
            </div>

            <div>
                <AddReview props={orderId.product}/>
            </div>

            <Link to= "/orderadmin">
                <button className={style.Inputs2}> <h3>Volver</h3></button>
            </Link>
        </div>
      
    ) : (
        <Loading />
    )
}