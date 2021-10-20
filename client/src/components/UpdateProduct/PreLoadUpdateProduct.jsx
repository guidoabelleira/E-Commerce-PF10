import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
//import { Link } from "react-router-dom";
import Loading from '../Loading/Loading'
import {
    getAllCategories,
    getAllProducts,
} from '../../redux/actions';
import UpdateProduct from './UpdateProduct';
import sytle from './UpdateProduct.module.css'

export default function PreLoadUpdateProduct() {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    const categories = useSelector(state => state.allCategories)
    const allProducts = useSelector(state => state.products)

    useEffect(() => {
        const data = async () => {
            try {
                dispatch(getAllCategories())
                dispatch(getAllProducts())
                setTimeout(()=> {
                    setLoading(false)
                }, 2000)
            }
            catch (error) {
                console.log(error)
            }
        }
        data()
    }, [dispatch, loading]);

    const state = {categories, allProducts}

    return (
        <div
            className={sytle.FormStyle}
        >
            {
                loading ?
                    (
                        <Loading />
                    )
                    :
                    (
                        <UpdateProduct peops={ state } />
                    )
            }
        </div>
    )
}