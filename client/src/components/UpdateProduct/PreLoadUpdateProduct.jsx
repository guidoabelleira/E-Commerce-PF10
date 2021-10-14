import React, { useState, useEffect } from 'react';
import { useDispatch, } from 'react-redux';
import { Link } from "react-router-dom";
import { 
    getAllCategories,
    getAllProducts,
} from '../../redux/actions';
import sytle from './UpdateProduct.module.css'

export default function PreLoadUpdateProduct (){

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const data = async ()=>{
            try{
                dispatch(getAllCategories())
                dispatch(getAllProducts())
                setLoading(false)
            }
            catch(error){
                console.log(error)
            }
        }
        data()
    }, [dispatch,]);


    return (
        <div
            className={sytle.FormStyle}
        >
            {
                <Link 
                    to='/adminproducts/editProduct'
                >
                    <button 
                        disabled={loading}
                    > 
                        {
                            loading? 
                                "Cargando..."
                                :
                                "Editar"
                        } 
                    </button>
                </Link>
            }
        </div>
    )
}