import { useDispatch, useSelector } from 'react-redux';
import { getLastestsProducts, getSalesProducts} from '../../redux/actions';
import { useEffect } from 'react';
import { NavLink as Link} from 'react-router-dom';

import ShowAdress from '../ShowAdress/ShowAdress'
import Cards from '../Cards/Cards';
import SearchBar from '../Searchbar/Searchbar';
import ShopCartButton from '../ShopCartButton/ShopCartButton';
import Loading from '../Loading/Loading';
import ProfileButton from '../ProfileButton/ProfileButton';

import style from './homePage.module.css'



export default function HomePage() {
    const dispatch = useDispatch();

    const lasted = useSelector(state => state.productsLastests);
    const sales = useSelector(state => state.productsSales);
    // const popular = useSelector(state => state.productsLastests);
    


    useEffect(() => {
        async function getters(){
            await dispatch(getLastestsProducts());
            await dispatch(getSalesProducts());
            // await dispatch(getPopularsProducts()); Falta back
        }
        getters();
    },[dispatch]);

    // Busco 3.
    // popular forzado a recibir lasted, cuando back tenga ruta hay que cambiar. y agregar verificacion en return
    // const lastedCard = lasted.slice(0, 3);
    // const popularCard = lasted.slice(0, 3); 
    // const salesCard = sales.slice(0, 3);
    

/*    function handleClick(e){ //esto resetea y trae todos los productos de nuevo
   e.preventDefault(); 
    dispatch(getAllProducts());
   } */

    return lasted ? (
        <div className={style.container}>
            <div className={style.margin}>

            <div className={style.searchbar}>
           {/*  <button className={style.rechargeBtn} onClick={e=>{handleClick(e)}}>Recargar Productos</button> */}
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
                    <Cards state={sales} popularCard={true}/>
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
                    <Cards state={sales} discountCard={true}/>
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