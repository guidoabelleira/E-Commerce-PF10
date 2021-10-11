import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    //getProductById, 
    getAllCategories,
    getAllProducts,
    putProduct
} from '../../redux/actions';

import style from './UpdateProduct.module.css'

export default function UpdateProduct () {

    const dispatch = useDispatch()
    //const productId = useSelector(state => state.productById);
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
    }

    const handleProduct = event => {
        event.preventDefault()
        const newProduct = allProducts[event.target.value]
        console.log(newProduct)
        setProduct(newProduct)
    }

    const handleOnCheck =  event => {
        event.preventDefault()
        const newData = { ...product }
        newData[event.target.name] = event.target.checked
        setProduct(newData)
    }

    const handleNewCategorie = event => {
        event.preventDefault()
        const newCategorie = { ...product }
        newCategorie.categories.push({name: event.target.value})
        setProduct(newCategorie)
    }

    const handleRemoveCategorie = event => {
        event.preventDefault()
        const newData = { ...product }
        let allCategories = []
        for(let i=0; i<product.categories.length; i++){
            if(product.categories[i].name !== event.target.value){
                allCategories.push(product.categories[i])
            }
        }
        newData.categories = allCategories
        setProduct(newData)
    }

    const onSubmit = event => {
        event.preventDefault()
        dispatch(putProduct)
    }
    
    useEffect(() => {
        try{
            dispatch(getAllCategories())
            dispatch(getAllProducts())
            //dispatch(getProductById(id))
        }
        catch(error){
            console.log(error)
        }
    }, []);

    return (

        <div className={'Formulario'}>

            <label htmlFor="targetProduct">Seleccione el producto que desea editar</label>
            <select 
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
                            value={product.id}
                        >
                            {product.name}
                        </option>)
                }
            </select>

            <h1>Actulización de productos - Id: {product.id}</h1>

            <form 
                className={style.FormStyle}
            >
                <label for='name'>
                    <b>
                        Nombre
                    </b>
                </label>

                <input 
                    //key= '1'
                    id= 'name'
                    name= 'name'
                    type= 'text'
                    placeholder= 'name'
                    onChange={event => handleOnChange(event)}
                    defaultValue= {product.name}
                />

                <label for='image'>
                    <b>
                        Imagen
                    </b>
                </label>
                <input 
                    //key= '2'
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
                    //key= '3'
                    id= 'price'
                    name= 'price'
                    type= 'number'
                    step= '0.01'
                    placeholder= 'price'
                    onChange={event => handleOnChange(event)}
                    defaultValue= {product.price}
                />

                <label for='stock'>
                    <b>
                        En Stock
                    </b>
                </label>

                <input 
                    //key= '4'
                    id= 'stock'
                    name= 'stock'
                    type= 'number'
                    placeholder= 'stock'
                    defaultValue= {product.stock}
                    onChange={event => handleOnChange(event)}
                />

                <label for='onStock'>
                    <b>
                        En Inventario
                    </b>
                </label>

                <input 
                    //key= '5'
                    id= 'onStock'
                    name= 'onStock'
                    type= 'checkbox'
                    checked= {product.onStock}
                    onChange={event => handleOnCheck(event)}
                />

                <label for='onSale'>
                    <b>
                        En Oferta
                    </b>
                </label>

                <input
                    //key= '6'
                    id= 'onSale'
                    name= 'onSale'
                    type= 'checkbox'
                    checked= {product.onSale}
                    onChange={event => handleOnCheck(event)}
                />

                <label for='description'>
                    <b>
                        {'Descripción'}
                    </b>
                </label>

                <textarea
                    //key= '7'
                    id= 'description'
                    name= 'description'
                    rows= '10'
                    cols= '45'
                    placeholder= 'description'
                    onChange={event => handleOnChange(event)}
                    defaultValue= {product.description}
                />

                <label for='Categorias'>
                    <b>
                        Categorias
                    </b>
                </label>

                <select 
                    key="ounedCategories"
                    name="categories" 
                    id="Categorias"
                    onClick={event => handleRemoveCategorie(event)}
                >
                    {product.categories?
                        product.categories.map(cat => (
                            <option 
                                key={product.categories.indexOf(cat.name).toString()}
                                name= {product.categories.name}
                                value={cat.name}
                            >
                                {cat.name}
                            </option>)
                        )
                        :
                        <option>No Categories Yet</option>
                    }
                </select>

            </form>

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
                            key="allCategories"
                            name="categories" 
                            id="categories"
                            onClick={event => handleNewCategorie(event)}
                        >
                            {categories.map(
                                cat => (
                                    <option
                                        key={cat.id.toString()}
                                        name={categories.filter(cat => cat.name === cat.name)}
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

        </div>
    )
}