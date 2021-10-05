import Cards from '../Cards/Cards';
import SearchBar from '../Searchbar/Searchbar';
import ShopCartButton from '../ShopCartButton/ShopCartButton';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts} from '../../redux/actions';
import { useEffect } from 'react';
import style from './homePage.module.css'

export default function HomePage() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.products)
    useEffect(async() => {
   
            await dispatch(getAllProducts());
    }, []);

    // Busco ultimos por ID, saco los ultimos 3.
    const lasted = state?.reverse().slice(0, 3);
    
    const discount = state?.filter(e => e.price < '300').slice(0, 3);

    const popular = state?.slice(10, 13);

    return lasted && discount && popular? (
        <div className={style.container}>
            <div className={style.margin}>

            <div className={style.searchbar}>
            <SearchBar /> 
            <ShopCartButton/>
            </div>
            <div className={style.cards}>
                <h3>Productos en descuento!!!</h3>
                <Cards state={discount} discountCard={true}/>
            </div>
            <div className={style.cards}>
                <h3>Los mas vendidos:</h3>
                <Cards state={popular} popularCard={true}/>
            </div>
            <div className={style.cards}>
                <h3>Nuestros ultimos productos:</h3>
                <Cards state={lasted} lastedCard={true}/>
            </div>
        </div>
        </div>
    ) : (
        <h1>Cargando...</h1>
    )
}