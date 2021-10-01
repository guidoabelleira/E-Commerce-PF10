import { useEffect, useState } from 'react';
import Filters from '../filters/Filters';
import SearchBar from '../Searchbar/Searchbar';
import Cards from '../Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts} from '../../redux/actions';


import style from './products.module.css';


function Products() {
    const dispatch = useDispatch();
    // const allProducts = useSelector(state => state.products)


    // useEffect(() => {
    //     async function geters() {
    //         await dispatch(getAllProducts());
    //     }
    //     geters();
    // }, []);


    return (
        <div className={style.body}>
            <div className={style.navegate}>
                <SearchBar /> 
                <Filters />
            </div>
            <div className={style.bodyCards}>
                {/* <Cards props={allProducts} /> */}
            </div>
        </div>
        
    )
};

export default Products;