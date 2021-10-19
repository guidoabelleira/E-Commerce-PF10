import { useDispatch, useSelector } from 'react-redux';
import { getLastestsProducts, getSalesProducts, getUser} from '../../redux/actions';
import { useEffect } from 'react';
import { NavLink as Link} from 'react-router-dom';

import ShowAdress from '../ShowAdress/ShowAdress'
import Cards from '../Cards/Cards';
import SearchBar from '../Searchbar/Searchbar';
import ShopCartButton from '../ShopCartButton/ShopCartButton';
import Loading from '../Loading/Loading';
import ProfileButton from '../ProfileButton/ProfileButton';

import style from './homePage.module.css'



// quiero que en la homepage me muestre productos destacados relacionados con 
// mis preferencias (basadas en compras previas, o favoritos). 


export default function HomePage() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user[0]);
    const lasted = useSelector(state => state.productsLastests);
    const sales = useSelector(state => state.productsSales);
    const id = localStorage.getItem('idUser')
    // const popular = useSelector(state => state.productsLastests);
    
    // function checkAddress(user){
    //     if(user){
    //         if(user.address.length < 10 || user.address.length === null){
    //             return false;
    //         } 
    //         return true;
    //     }
    // }

    // let address = checkAddress(user);
    // console.log("user en home: ", user)
    useEffect(() => {
        async function getters(){
            await dispatch(getUser(id))
            await dispatch(getLastestsProducts());
            await dispatch(getSalesProducts());
            // await dispatch(getPopularsProducts()); Falta back
        }
        getters();
    },[dispatch, id]);
    

    // function handleClick(e){ //esto resetea y trae todos los productos de nuevo
    //     e.preventDefault(); 
    //     dispatch(getAllProducts());
    // } 

    return lasted ? (
        <div className={style.container}>
            <div className={style.margin}>

            <div className={style.searchbar}>
                {/* <button className={style.rechargeBtn} onClick={e=>{handleClick(e)}}>Recargar Productos</button> */}
                {user?.address ? (<ShowAdress state={user.address}/>
                ) : (
                    <></>)}
                <SearchBar /> 
                <ShopCartButton/>
                <ProfileButton/>
            </div>

             <div className={style.cards}>
                {/* {user.address === null ? (<div>
                    <p>no address</p>
                    <Link to="/Profile">Ir</Link>
                </div>) : (<></>)} */}
                <div className={style.seeAll}>
                    <p  className={style.h3Primario}>Los más vendidos:</p>
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
                    <p className={style.h3Secundario}>Productos en descuento!!!</p>
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
                    <p className={style.h3Terceario}>Nuestros ultimos productos:</p>
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