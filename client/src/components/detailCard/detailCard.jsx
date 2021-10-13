import style from "./detailCard.module.css"
import React from "react";
import { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, addPCart } from '../../redux/actions';

import ShopCartButton from "../ShopCartButton/ShopCartButton"
import Valuation from "../Valuation/Valuation";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";


export default function DetailCard (props) {
    let aux = props.match.params.id;
    const dispatch = useDispatch();
    
    const productId = useSelector(state => state.productById);
    const productsState = useSelector(state => state.shopProduct);
    useEffect(() => {
        dispatch(getProductById(aux));
    }, [dispatch, aux]);

    return productId ? (
      <div>
        <Link to= "/products">
          <button className={style.Inputs2}> <h3>Volver</h3></button>
        </Link>
        <div className={style.container}>
            <div >
                <h2> Artículo: "{productId.name}"</h2>
                <div >
                    <ShopCartButton />

                    <img className={style.img} src={productId.image} alt="Err img" width="400px" height="250px"/>
                    <p> 
                        <b>Precio:</b> {productId.price}
                    </p>

                    <p> 
                        <b>Descripción:</b> {productId.description}
                    </p>

                    <p>
                        <Valuation props={aux} />
                    </p>
                    
                    <button
                        className={style.Inputs}
                        onClick={event => dispatch(addPCart(
                            productId, productsState

                        ))}
                    >
                        <h3>Agregar al carrito de compras</h3>
                    </button> 

                </div>
            </div>
        </div>
      </div>
    ) : (
        <Loading />
    )
}