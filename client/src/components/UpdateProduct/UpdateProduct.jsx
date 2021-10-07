import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getProductById, 
    getAllCategories, 
    putProduct
} from '../../redux/actions';

import style from './UpdateProduct.module.css'

export default function UpdateProduct (props) {

    const dispatch =  useDispatch()
    
    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getProductById(props.props));
    }, []);

    const productId = useSelector((state) => state.productById);
    const CATEGORIAS = useSelector((state) => state.allCategories)

    const [product, setProduct] = useState(productId)
    const [categories, setCategories] = useState(CATEGORIAS)
    const [showCategories, setShowCategories] = useState(false)
    //console.log('CATEGORIAS', categories)

    //1
    const handleOnChangeName = event => {
        event.preventDefault()
        const newData = { ...product }
        newData[event.target.name] = event.target.value
        setProduct(newData)
        console.log('productId/name', product.name)
    }

    //3
    const handleOnChangePrice = event => {
        event.preventDefault()
        const newData = { ...product }
        newData[event.target.price] = event.target.value
        setProduct(newData)
        console.log('productId/price', product.price)
    }

    //4
    const handleOnCheckStock = event => {
        event.preventDefault()
        const newData = { ...product }
        newData[event.target.stock] = event.target.value
        setProduct(newData)
        console.log('productId/stock', product.stock)
    }
    //5
    const handleOnCheckOnStock = event => {
        event.preventDefault()
        const newData = { ...product }
        newData[event.target.onStock] = event.target.value
        setProduct(newData)
        console.log('productId/onStock', product.onStock)
    }
    //6
    const handleOnCheckOnSale = evnet => {
        evnet.preventDefault()
        const newData = { ...product }
        newData[evnet.target.onSale] = evnet.target.value
        setProduct(newData)
        console.log('productId/onSale', product.onSale)
    }

    //7
    const handleOnChangeDescripción = event => {
        event.preventDefault()
        const newData = { ...product }
        newData[event.target.Descripción] = event.target.value
        setProduct(newData)
        console.log('productId/onSale', product.onSale)
    }

    const handleNewCategorie = event => {
        event.preventDefault()
        const newData = { ...product }
        newData[event.target.categories] = event.target.value
        setProduct(newData)
        console.log('productId/onSale', product.categories)
    }
    console.log(product)

    const onSubmit = event => {
        event.preventDefault()
        dispatch(putProduct)
    }
    
    return (

        <div>

            <h1>Actulización de productos - Id: {product.id}</h1>

            <form 
                className={style.FormStyle}
            >

{/*
                <label for='id'>
                    <b>
                        Id
                    </b>   
                </label>

                <input 
                    key= '0'
                    id= 'id'
                    name= 'id'
                    type= 'number'
                    placeholder= 'id'
                    Value= {product.id}
                />
*/}

                <label for='name'>
                    <b>
                        Nombre
                    </b>
                </label>

                <input 
                    key= '1'
                    id= 'name'
                    name= 'name'
                    type= 'text'
                    placeholder= 'name'
                    onChange={event => handleOnChangeName(event)}
                    defaultValue= {product.name}
                />

                <label for='image'>
                    <b>
                        Imagen
                    </b>
                </label>
                <input 
                    key= '2'
                    id= 'image'
                    name= 'image'
                    type= 'file'
                    placeholder= 'image'
                />

                <label for='price'>
                    <b>
                        Precio
                    </b>
                </label>

                <input 
                    key= '3'
                    id= 'price'
                    name= 'price'
                    type= 'number'
                    step= '0.01'
                    placeholder= 'price'
                    onChange={event => handleOnChangePrice(event)}
                    defaultValue= {product.price}
                />

                <label for='stock'>
                    <b>
                        En Stock
                    </b>
                </label>

                <input 
                    key= '4'
                    id= 'stock'
                    name= 'stock'
                    type= 'number'
                    placeholder= 'stock'
                    defaultValue= {product.stock}
                    onChange={event => handleOnCheckStock(event)}
                />

                <label for='onStock'>
                    <b>
                        En Inventario
                    </b>
                </label>

                <input 
                    key= '5'
                    id= 'onStock'
                    name= 'onStock'
                    type= 'checkbox'
                    onChange={event => handleOnCheckOnStock(event)}
                />

                <label for='onSale'>
                    <b>
                        En Oferta
                    </b>
                </label>

                <input
                    key= '6'
                    id= 'onSale'
                    name= 'onSale'
                    type= 'checkbox'
                    onChange={event => handleOnCheckOnSale(event)}
                />

                <label for='description'>
                    <b>
                        {'Descripción'}
                    </b>
                </label>

                <textarea
                    key= '7'
                    id= 'description'
                    name= 'description'
                    rows= '10'
                    cols= '45'
                    placeholder= 'description'
                    onChange={event => handleOnChangeDescripción(event)}
                    defaultValue= {product.description}
                />

                <label for='Categorias'>
                    <b>
                        Categorias
                    </b>
                </label>

                <select 
                    name="categories" 
                    id="Categorias"
                >
                    {product.categories?
                        product.categories.map(cat => (
                            <option 
                                key={product.categories.indexOf(cat.name)}
                                value={cat.name}
                            >
                                {cat.name}
                            </option>)
                        )
                        :
                        <option>No Categories Yet</option>
                    }
                </select>

                <button
                    type='button'
                    onClick={() => setShowCategories(!showCategories)}
                >{
                    showCategories?
                        'No agregar Categoría'
                        :
                        'Agregar Categoria'
                }</button>

                <div>

                    {showCategories &&
                        <form>

                            <label for="addCategorie">
                                <b>
                                    Agregar Categoria al producto
                                </b>
                            </label>

                            <select 
                                name="categories" 
                                id="categories"
                                onChange={event => handleNewCategorie(event)}
                            >
                                {categories.map(
                                    cat => (
                                        <option
                                            key={cat.id}
                                            value={cat.name}
                                        >
                                            {cat.name}
                                        </option>
                                    )
                                )}
                            </select>

                        </form>
                    }
                </div>

            </form>
        </div>
    )
}