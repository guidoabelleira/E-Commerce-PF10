import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts} from '../../redux/actions';
import { useEffect } from 'react';
import ShowAdress from '../ShowAdress/ShowAdress'
import Cards from '../Cards/Cards';
import SearchBar from '../Searchbar/Searchbar';
import ShopCartButton from '../ShopCartButton/ShopCartButton';
import Loading from '../Loading/Loading';
import { NavLink as Link} from 'react-router-dom';
import style from './homePage.module.css'
import ProfileButton from '../ProfileButton/ProfileButton';
export default function HomePage() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.products)
    useEffect(async() => {
   
            await dispatch(getAllProducts());
    }, []);

    // Busco ultimos por ID, saco los ultimos 3.
    const lasted = state?.reverse().slice(0, 3);
    
    const discount = state?.filter(e => e.price < '300').slice(0, 4);

    const popular = state?.slice(10, 13);

    return lasted && discount && popular? (
        <div className={style.container}>
            <div className={style.margin}>

            <div className={style.searchbar}>
                <ShowAdress/>
            <SearchBar /> 
            <ShopCartButton/>
            <ProfileButton/>
            </div>
            <div className={style.cards}>
                <div className={style.seeAll}>
                <p  className={style.h3Primario}>Los mas vendidos:</p>
                <Link className={style.Link}to="/products">
                <p  className={style.verTodos}>Ver Todos:</p>
                    </Link>
                    </div>
                    <div className={style.render}>
                <Cards state={popular} popularCard={true}/>
                </div>
            </div>

            <div className={style.cards}>
            <div className={style.seeAll}>
            <h3 className={style.h3Secundario}>Productos en descuento!!!</h3>
                <Link className={style.Link}to="/products">
                <p  className={style.verTodos}>Ver Todos:</p>
                    </Link>
                    </div>
                    <div className={style.render}>
                <Cards state={discount} discountCard={true}/>
                </div>
            </div>
            
            <div className={style.cards}>
                
                <div className={style.seeAll}>
                <h3 className={style.h3Terceario}>Nuestros ultimos productos:</h3>
        
                    </div>
                    <div className={style.render}>
                <Cards state={lasted} lastedCard={true}/>
                </div>
            </div>
        </div>
        </div>
    ) : (
        <Loading />
    )
}