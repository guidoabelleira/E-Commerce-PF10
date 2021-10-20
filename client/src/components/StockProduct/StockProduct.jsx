import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductByStock } from '../../redux/actions';
import style from './stockProduct.module.css';

export default function StockProducts (){

    //'id' valor a pasar en caso de filtrar por cantidad indicada por usuario, sino responde cantidad default. 


    const dispatch = useDispatch();
    const stock = useSelector(state => state.stock);
    console.log(stock)
    let id = 50;

    useEffect(() => {
        async function getters(){
            await dispatch(getProductByStock(id))
        }
        getters();
    },[dispatch, id]);

    return(
        <div className={style.container}>
            <h2>soy stock</h2>
        </div>
        
    )
}