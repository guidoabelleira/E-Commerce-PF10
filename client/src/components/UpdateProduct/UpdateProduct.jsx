import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, getAllCategories } from '../../redux/actions';


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
    //console.log('productId', product)
    console.log('CATEGORIAS', categories)
    console.log(showCategories)
    

    return (
        <div>

            <h1>Actulización de productos</h1>

            <form >

                <label for='id'> <b>Id</b> </label>
                <input 
                    id= 'id'
                    name= 'id'
                    type= 'number'
                    placeholder= 'id'
                    value= {product.id}  
                />

                <label for='name'> <b>Nombre</b> </label>
                <input 
                    id= 'name'
                    name= 'name'
                    type= 'text'
                    placeholder= 'name'
                    value= {product.name} 
                />

                <label for='image'> <b>Imagen</b> </label>
                <input 
                    id= 'image'
                    name= 'image'
                    type= 'file'
                    placeholder= 'image'
                />

                <label for='price'> <b>Precio</b> </label>
                <input 
                    id= 'price'
                    name= 'price'
                    type= 'number'
                    placeholder= 'price'
                    value= {product.price} 
                />

                <label for='stock'> <b>Stock</b> </label>
                <input 
                    id= 'stock'
                    name= 'stock'
                    type= 'number'
                    placeholder= 'stock'
                    value= {product.stock} 
                />

                <label for='onStock'> <b>En Inventario</b> </label>
                <input 
                    id= 'onStock'
                    name= 'onStock'
                    type= 'radio'
                />

                <label for='onSale'> <b>En Oferta</b> </label>
                <input
                    id= 'onSale'
                    name= 'onSale'
                    type= 'radio'
                />

                <label for='description'> <b>{'Descripción'}</b> </label>
                <textarea
                    id= 'description'
                    name= 'description'
                    rows= '10'
                    cols= '45'
                    placeholder= 'description'
                    value= {product.description} 
                />

                <label for='Categorias'> <b>Categorias</b> </label>
                <select 
                    name="categories" 
                    id="Categorias"
                >
                    {product.categories.map(cat => (
                        <option 
                            key={product.categories.indexOf(cat.name)}
                            value={cat.name}
                        >
                            {cat.name}
                        </option>)
                    )}
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
                            <label for="addCategorie"><b>Agregar Categoria al producto</b></label>
                            <select 
                                name="categories" 
                                id="addCategorie"
                            >
                                {categories.map(cat => (
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