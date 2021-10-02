import PopularCard from '../PopularProducts/PopularCard';
import DiscountCard from '../DiscountCard/DiscountCard';
import LastedCard from '../LastedCard/LastedCard';
import Cards from '../Cards/Cards';
import SearchBar from '../Searchbar/Searchbar';

import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions';
import { useEffect, useState } from 'react';


export default function HomePage() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.products)
    useEffect(async() => {
   
            await dispatch(getAllProducts());
    }, []);

    console.log(state[0])

    let popular = state.reverse()

    return(
        <div>
              <SearchBar /> 
            <p>hola si sirvo c":, yo sabia que mi madre se equivocaba :v</p>
            <Cards state={popular} />
            {/* <Cards state={state} discountCard={true}/>
            <Cards state={state} lastedCard={true}/> */}
        </div>
    )
}