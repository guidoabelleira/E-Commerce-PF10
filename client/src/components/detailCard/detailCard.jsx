import style from "./detailCard.module.css"
import React from "react";
import  {useEffect}  from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductById} from '../../redux/actions';

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
                <div >
                    <img className={style.img} src={productId.image} alt="Err img" />
                </div>
                <div >
                    <h4>Articulo: "{productId.name}"</h4>
                    <p>Precio: {productId.price}</p>
                </div>
            </div>
        </div>
    ) : (
        <h1>Cargando...</h1>
    )
}