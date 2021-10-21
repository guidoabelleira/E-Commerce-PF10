import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductByStock } from '../../redux/actions';
import style from './stockProduct.module.css';

export default function StockProducts() {

    //'id' valor a pasar en caso de filtrar por cantidad indicada por usuario, sino responde cantidad default. 


    const dispatch = useDispatch();
    const stock = useSelector(state => state.stock);
    console.log(stock)

    const [input, setInput] = useState({
        quantity: ''
    })

    function handleInputChange(e) {
        setInput({
            quantity: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log('SUBMIT ', input.quantity)
        dispatch(getProductByStock(input.quantity))
/*         setInput({
            quantity: ''
        }) */
    }

    useEffect(() => {
        async function getters() {
            await dispatch(getProductByStock())
        }
        getters();
    }, [dispatch, input.quantity]);

    return (
        <div className={style.container}>
            <h2>Control de stock</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <input 
                        type="number"
                        name="input_quantity"
                        placeholder='Cantidad'
                        onChange={handleInputChange}
                        value={input.quantity}
                        className={style.input}    
                        required                
                    />
                <button type='submit' className={style.bttn}>Ver stock</button>
                </p>
            </form>
            <ul className={style.products}>
                {stock ? (stock?.map(e => {
                    return (
                        <li key={e.id}>
                            <p>{e.name}</p>
                            <p>Id: {e.id}</p>
                            <p>Stock: {e.stock}</p>
                            <br />
                        </li>
                    )
                })) : (<p>NULL</p>)}
            </ul>
        </div>

    )
}