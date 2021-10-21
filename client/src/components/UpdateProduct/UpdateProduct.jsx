import React, { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //useSelector
import { putProduct, } from '../../redux/actions';

import style from './UpdateProduct.module.css'
//import Loading from '../Loading/Loading'

export default function UpdateProduct() {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.allCategories)
    const allProducts = useSelector(state => state.products)

    //console.log(allProducts[1].name)

    const [product, setProduct] = useState(allProducts[0])
    const [showCategories, setShowCategories] = useState(false)

    const handleOnChange = event => {
        event.preventDefault()
        const newData = { ...product }
        newData[event.target.name] = event.target.value
        setProduct(newData)
        console.log(product)
    }

    const handleProduct = event => {
        event.preventDefault()
        const newProduct = allProducts[event.target.value]
        console.log(newProduct)
        setProduct(newProduct)
    }

    const handleOnCheck = event => {
        event.preventDefault()
        const newData = { ...product }
        newData[event.target.name] = event.target.checked
        setProduct(newData)
    }

    const handleNewCategorie = event => {
        event.preventDefault()
        const newCategorie = { ...product }
        newCategorie.categories.push({ name: event.target.value })
        setProduct(newCategorie)
    }

    const handleRemoveCategorie = event => {
        event.preventDefault()
        const newData = { ...product }
        let allCategories = []
        for (let i = 0; i < product.categories.length; i++) {
            if (product.categories[i].name !== event.target.value) {
                allCategories.push(product.categories[i])
            }
        }
        newData.categories = allCategories
        setProduct(newData)
    }

    const onSubmit = async event => {
        event.preventDefault()
        alert("Peticion de cambio enviada")
        const sendProduct = {
            "id": product.id,
            "name": product.name,
            "image": product.image,
            "price": product.price,
            "stock": product.stock,
            "onStock": product.onStock,
            "onSale": product.onSale,
            "description": product.description,
            "category": product.category
        }
        dispatch(putProduct(sendProduct))
    }

    return (

        <div className={style.container}>
            <label
                htmlFor="targetProduct"
            >
                Seleccione el producto que desea editar
            </label>
            <select
                className={style.selects}
                key="targetProduct"
                id="targetProduct"
                name="targetProduct"
                onClick={event => handleProduct(event)}
            >
                {
                    allProducts.map(product =>
                        <option
                            key={product.id.toString()}
                            name={product.name}
                            value={product.id - 1}
                        >
                            {product.name}
                        </option>)
                }
            </select>
            <br />

            <h1>Actualización de productos  Id: {product.id}</h1>
            <br />

            <form
                className={style.FormStyle}
                onSubmit={event => onSubmit(event)}
            >
                <label htmlFor='name'>
                    <b>
                        Nombre
                    </b>
                </label>

                <input
                    key='name'
                    id='name'
                    name='name'
                    type='text'
                    placeholder='name'
                    onChange={event => handleOnChange(event)}
                    value={product.name}
                    className={style.input}
                />


                <label htmlFor='price'>
                    <b>
                        Precio
                    </b>
                </label>

                <input
                    key='price'
                    id='price'
                    name='price'
                    type='number'
                    step='0.01'
                    placeholder='price'
                    onChange={event => handleOnChange(event)}
                    value={product.price}
                    className={style.input}
                />

                <label
                    htmlFor='stock'
                >
                    <b>
                        En Stock
                    </b>
                </label>

                <input
                    key='stock'
                    id='stock'
                    name='stock'
                    type='number'
                    placeholder='stock'
                    value={product.stock}
                    onChange={event => handleOnChange(event)}
                    className={style.input}
                />
                
                <label
                    htmlFor='description'
                >
                    <b>
                        {'Descripción'}
                    </b>
                </label>
                <textarea
                    key='description'
                    id='description'
                    name='description'
                    rows='10'
                    cols='45'
                    placeholder='description'
                    onChange={event => handleOnChange(event)}
                    value={product.description}
                    className={style.input}
                />
                <label
                    htmlFor='image'
                >
                    <b>
                        Imagen
                    </b>
                </label>
                <input
                    key='image'
                    id='image'
                    name='image'
                    type='file'
                    placeholder='image'
                />
            <br />

                <label
                    htmlFor='onStock'
                >
                    <b>
                        En Inventario
                    </b>
                </label>

                <input
                    key='onStock'
                    id='onStock'
                    name='onStock'
                    type='checkbox'
                    checked={product.onStock}
                    onChange={event => handleOnCheck(event)}
                />

                <label
                    htmlFor='onSale'
                >
                    <b>
                        En Oferta
                    </b>
                </label>

                <input
                    key='onSale'
                    id='onSale'
                    name='onSale'
                    type='checkbox'
                    checked={product.onSale}
                    onChange={event => handleOnCheck(event)}
                />



                <br />
                <label
                    htmlFor='Categorias'
                >
                    <b>
                        Categorías
                    </b>
                </label>
                <select
                    className={style.selects}
                    key="ounedCategories"
                    name="categories"
                    id="Categorias"
                    onClick={event => handleRemoveCategorie(event)}
                >
                    {product.categories ?
                        product.categories.map((cat, index) => (
                            <option
                                key={index}
                                name={product.categories.name}
                                value={cat.name}
                            >
                                {cat.name}
                            </option>)
                        )
                        :
                        <option>No Categories Yet</option>
                    }
                </select>
                <br />
                <button
                    className={style.bttn}
                    type='button'
                    onClick={() => setShowCategories(!showCategories)}
                >{
                        showCategories ?
                            'No agregar Categoría'
                            :
                            'Agregar Categoria'
                    }</button>

                <div>

                    {showCategories &&
                        <>

                            <label htmlFor="addCategorie">
                                <b>
                                    Agregar Categoria al producto
                                </b>
                            </label>

                            <select
                                className={style.selects}
                                key="allCategories"
                                name="categories"
                                id="categories"
                                onClick={event => handleNewCategorie(event)}
                            >
                                {categories.map(
                                    (cat, index) => (
                                        <option
                                            key={index}
                                            name={categories.filter(c => c.name === cat.name)}
                                            value={cat.name}
                                        >
                                            {cat.name}
                                        </option>
                                    )
                                )}
                            </select>

                        </>
                    }
                </div>

                <button className={style.bttn}>
                    Enviar Cambios
                </button>
            </form>
        </div>
    )
}

/*
            "id": 0,
            "name": "no Name",
            "image": "no Imagen",
            "price": 0,
            "stock": 0,
            "onStock": false,
            "onSale": false,
            "description": "no Descripcion",
            "category": [],
*/