import Cards from '../Cards/Cards';
import SearchBar from '../Searchbar/Searchbar';
import ShopCartButton from '../ShopCartButton/ShopCartButton';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts} from '../../redux/actions';
import { useEffect, useState } from 'react';
import style from './homePage.module.css'

export default function HomePage() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.products)
    useEffect(async() => {
   
            await dispatch(getAllProducts());
    }, []);

    console.log("state", state)


    // Busco ultimos por ID, saco los ultimos 3.
    let lasted = state.reverse().slice(0, 3);
    
    let discount = state.filter(e => e.price < '300').slice(0, 3);
    console.log("discount: ", discount)

    let popular = state.slice(10, 13);
    console.log("popular: ", popular)

    return(
        <div className={style.container}>
            <div className={style.margin}>

            
            <SearchBar /> 
            <ShopCartButton/>
            <div className={style.cards}>
                <h3>Popular Products:</h3>
                <Cards state={popular} popularCard={true}/>
            </div>
            <div className={style.cards}>
                <h3>Discount Products:</h3>
                <Cards state={discount} discountCard={true}/>
            </div>
            <div className={style.cards}>
                <h3>Lasted Products:</h3>
                <Cards state={lasted} lastedCard={true}/>
            </div>
        </div>
        </div>
    )
}