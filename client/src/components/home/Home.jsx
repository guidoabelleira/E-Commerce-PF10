import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../Searchbar/Searchbar';
import PopularCard from '../PopularProducts/PopularCard';
import DiscountCard from '../DiscountCard/DiscountCard';
import LastedCard from '../LastedCard/LastedCard';

import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions';

import style from './home.module.css';


function Home() {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.products)
    console.log(allProducts);
    // const date //esta constante hace referencia a la fecha actual

    // const popularProducts // filtramos productos por los mas vendidos - FALTA hacer relacion de venta en bd para poder filtrar
    // const discountProducts = allProducts.filter(p => p.onSale !== false); // filtramos productos con descuento en base al valor onSale
    // const lastAdded = allProducts.filter(p => p.upCreateDate < date); // filtramos prod por fecha de creacion
    const [x, setX] = useState('')

    useEffect(() => {
        async function geters() {
            await dispatch(getAllProducts());
        }
        geters();
    }, []);

    function change() {
        setX(allProducts)
        console.log(x)
    }


    return (
        <div className={style.body}>
            <div className={style.navegate}>
                {/* <SearchBar />  */}
            </div>
            
            <div className={style.bodyCards}>
                {/* <PopularCard props={}/>
                <DiscountCard props={}/>
                <LastedCard props={}/> */}
                {/* <p>{allProducts[0].id}</p> */}
            </div>
            <div className={style.startedPack}>
                aca va startedPack
            </div>
            <div>
            <button onClick={change()}>x</button>
            </div>
        </div>
        
    )
};

export default Home;