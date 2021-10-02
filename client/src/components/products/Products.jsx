import { useEffect, useState } from 'react';
import Filters from '../filters/Filters';
import SearchBar from '../Searchbar/Searchbar';
import Cards from '../Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts} from '../../redux/actions';


import style from './products.module.css';


function Products() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.products)
    useEffect(async() => {
   
            await dispatch(getAllProducts());
    }, []);


    return (
        <div >
            <div >
                <SearchBar /> 
                <Filters />
            </div>
            <div >
                <Cards state={state} />
            </div>
        </div>
        
    )
};

export default Products;