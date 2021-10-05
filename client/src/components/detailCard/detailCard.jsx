import style from "./detailCard.module.css"
import React from "react";
import { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, addPCart } from '../../redux/actions';

import ShopCartButton from "../ShopCartButton/ShopCartButton"


export default function DetailCard (props) {
    let aux = props.match.params.id;
    const dispatch = useDispatch();
    
    const productId = useSelector((state) => state.productById);
    useEffect(() => {
        dispatch(getProductById(aux));
    }, [dispatch]);

    return productId ? (
        <div className={style.container}>
            <div >
                <h2> Articulo: "{productId.name}"</h2>
                <div >

                    <ShopCartButton />

                    <img className={style.img} src={productId.image} alt="Err img" />
                    <p> <b>Precio:</b> {productId.price}</p>
                    <p> <b>Descripcón:</b> {productId.description}</p>
                    <button
                        className={style.Inputs}
                        onClick={event => dispatch(addPCart(
                            productId
                        ))}
                    >
                        <h3>Agregar al carrito de compras</h3>
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <h1>Cargando...</h1>
    )
}