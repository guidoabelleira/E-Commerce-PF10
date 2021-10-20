import React from "react";
import { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from '../../redux/actions';

import Loading from "../Loading/Loading";
import { Link, useHistory } from "react-router-dom";

import style from "./tiket.module.css"


export default function Tiket (props) {
    let aux = props.match.params.id;
    console.log("Aux: ",aux)
    const dispatch = useDispatch();
    const history = useHistory();
    console.log("history: ", history)
    
    const orderId = useSelector(state => state.orderById);
    console.log("orderID ",orderId)
    useEffect(() => {
        dispatch(getOrderById(aux));
    }, [dispatch, aux]);

    return orderId ? (
      <div>
        <div className={style.container}>
            <div >
                <h2 className={style.title}> {orderId.name}</h2>
                <div >
                    <p> 
                        <b>Precio:$</b>{orderId.price}
                    </p>

                    <p> 
                        <b>Descripción:</b> {orderId.description}
                    </p>
 

                </div>
            </div>
            <Link to= "/products">
                <button className={style.Inputs2}> <h3>Volver</h3></button>
            </Link>
        </div>
      </div>
    ) : (
        <Loading />
    )
}