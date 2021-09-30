import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../Searchbar';
import ReutilizableCard from '';
import { useDispatch, useSelector } from 'react-redux';

import style from './home.module.css';


function Home() {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.product)

    const date //esta constante hace referencia a la fecha actual

    const popularProducts // filtramos productos por los mas vendidos - FALTA hacer relacion de venta en bd para poder filtrar
    const discountProducts = allProducts.filter(p => p.onSale !== false); // filtramos productos con descuento en base al valor onSale
    const lastAdded = allProducts.filter(p => p.upCreateDate < date); // filtramos prod por fecha de creacion

    useEffect(() => {
        async function geters() {
            await dispatch(getAllProducts());
        }
        geters();
    }, []);


    return (
        <div className={style.body}>
            <div className={style.navegate}>
                <SearchBar /> 
            </div>
            
            <div className={style.bodyCards}>
                <ReutilizableCard props={popularProducts}/>
                <ReutilizableCard props={discountProducts}/>
                <ReutilizableCard props={lastAdded}/>
            </div>
            <div className={style.startedPack}>
                aca va startedPack
            </div>
        </div>
        
    )
};

export default Home;