import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function UpdateProduct () {
    const dispatch =  useDispatch()

    const [product, setProduct] = useState(
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
    )

    return (
        <div>

            <h1>Actulización de productos</h1>

            <form >

                <input 
                    id= 'id'
                    name= 'id'
                    type= 'number'
                    placeholder= 'id' 
                />

                <input 
                    id= 'name'
                    name= 'name'
                    type= 'text'
                    placeholder= 'name' 
                />

                <input 
                    id= 'image'
                    name= 'image'
                    type= 'url'
                    placeholder= 'image' 
                />

                <input 
                    id= 'price'
                    name= 'price'
                    type= 'number'
                    placeholder= 'price' 
                />

                <input 
                    id= 'stock'
                    name= 'stock'
                    type= 'number'
                    placeholder= 'stock' 
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
                />

                <label for='category'>Agregar una categoria </label>
                <select 
                    id="category"
                    name="category" 
                >
                    <option value="primera">primera</option>
                    <option value="segunda">segunda</option>
                    <option value="tercera">tercera</option>
                </select>
            </form>
        </div>
    )
}
