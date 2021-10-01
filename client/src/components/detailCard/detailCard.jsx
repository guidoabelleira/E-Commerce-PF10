
import { useParams, } from "react-router"
//import { useState, useEffect, } from "react"
import { useDispatch, } from 'react-redux'
//import { store } from '../../redux/store'
import { getProductByID, addProductToTheShoppingCart } from '../../redux/actions'

export default function detailCard () {
    //const product = useSelector(state => state.product)
    //const state = store.getState()
    const dispatch = useDispatch()
    const { id } = useParams

    const product = dispatch(getProductByID(id))
    const {
        name,
        id,
        image,
        price,
        stock,
        onStock,
        onSale,
        description,
        category,
    } = product

    const onSubmit = event => {
        event.preventDefault();
        alert("New Product was sucessfully added to the shopping cart");
        dispatch(addProductToTheShoppingCart(product));    
    };


    return(
        <div>
            <header>

                <h1>
                    {name}
                </h1>

                <ol>
                {category.map(cat => (
                    <li>{cat}</li>
                ))}
                </ol>

            </header>

            <section>

                <img src={image} alt={`imagen de ${name}`} />

                <div>
                    {`${price} $`}
                </div>

                <div>
                    {`Stock = ${stock}`}
                </div>

            </section>

            <footer>

                <div>

                    {onStock? <p>"on Stock"</p> : <p>"out Stock"</p>}
                    <br/>

                    {onSale? <p>"on Sale"</p> : <p>"out Sale"</p>}

                </div>

                <p>{description}</p>

                <button type="submit">
                    Add to car
                </button>

            </footer>

        </div>
    )
}