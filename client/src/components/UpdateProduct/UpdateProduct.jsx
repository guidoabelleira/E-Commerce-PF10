import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getProductById, addPCart } from '../../redux/actions';


export default function UpdateProduct (props) {
    const dispatch =  useDispatch()
    
    useEffect(() => {
        dispatch(getProductById(props.props));
    }, [dispatch]);
    const productId = useSelector((state) => state.productById);

    const [product, setProduct] = useState(productId)
    console.log(product.categories)

    return (
        <div>

            <h1>Actulización de productos</h1>

            <form >

                <input 
                    id= 'id'
                    name= 'id'
                    type= 'number'
                    placeholder= 'id'
                    value= {product.id}  
                />

                <input 
                    id= 'name'
                    name= 'name'
                    type= 'text'
                    placeholder= 'name'
                    value= {product.name} 
                />

                <input 
                    id= 'image'
                    name= 'image'
                    type= 'file'
                    placeholder= 'image'
                />

                <input 
                    id= 'price'
                    name= 'price'
                    type= 'number'
                    placeholder= 'price'
                    value= {product.price} 
                />

                <input 
                    id= 'stock'
                    name= 'stock'
                    type= 'number'
                    placeholder= 'stock'
                    value= {product.stock} 
                />

                <label for='onStock'> onStock </label>
                <input 
                    id= 'onStock'
                    name= 'onStock'
                    type= 'radio'
                />

                <label for='onSale'> onSale </label>
                <input
                    id= 'onSale'
                    name= 'onSale'
                    type= 'radio'
                />

                <input
                    id= 'description'
                    name= 'description'
                    type= 'text'
                    placeholder= 'description'
                    value= {product.description} 
                />

                <label for='category'>Agregar una categoria </label>
                <select 
                    id="category"
                    name="category" 
                >
                    {product.categories.map(cat => (
                        <option 
                            key={product.categories.indexOf(cat.name)}
                            value={cat.name}
                        >
                            {cat.name}</option>)
                    )}
                </select>
            </form>
        </div>
    )
}

/*
{ 
    name: '',         
    image: '', 
    price: 0, 
    stock: 0, 
    onStock: false, 
    onSale: false, 
    description: '', 
    category: '' 
}
*/