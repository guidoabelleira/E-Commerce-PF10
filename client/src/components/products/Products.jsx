import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts} from '../../redux/actions';
import ReactPaginate from 'react-paginate'

// import Filters from '../filters/Filters';
import SearchBar from '../Searchbar/Searchbar';
import AuxiliarCards from '../AuxiliarCards/AuxiliarCards';
import ShopCartButton from '../ShopCartButton/ShopCartButton';
import ProfileButton from '../ProfileButton/ProfileButton';
import ShowAdress from '../ShowAdress/ShowAdress'

import style from './products.module.css';
import Filter from '../filters/Filters';

function Products() {
    let [pageNumber, setPageNumber] = useState(0)
   
    const dispatch = useDispatch();
    const state = useSelector(state => state.products)
    useEffect(() => {
        async function getters(){
            await dispatch(getAllProducts());
        }
        getters();
    }, [dispatch]);
    if(state){
        let cardsPerPage = 9;
        let pagesVisited = pageNumber * cardsPerPage
        const displayCards = state.slice(pagesVisited, pagesVisited + cardsPerPage)
        const pageCount = Math.ceil(state.length / cardsPerPage)
        const changePage = ({selected}) => { 
            setPageNumber(selected)
        }
    
    /* function handleClick(e){ //esto resetea y trae todos los productos de nuevo
        e.preventDefault(); 
        dispatch(getAllProducts());
    } */ 

        return (
            <div className={style.container}>
            <div className={style.searchbar}>
                    {/* <button className={style.rechargeBtn} onClick={e=>{handleClick(e)}}>Recargar Productos</button> */}
                    <ShowAdress/>
                    <SearchBar /> 
                    <ShopCartButton/>
                    <ProfileButton/>
                </div>
                <div>
                    <Filter/>
                </div>
                <div className={style.cards}>
                    <AuxiliarCards state={displayCards} />
                    <ReactPaginate 
                        previousLabel={"previus"}
                        nextLabel={"next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={style.paginationContainer}
                        previousClassName= {style.bttn}
                        nextLinkClassName={style.bttn}
                        disabledClassName={style.disablePagination}
                        activeClassName={style.activePagination}/>
                </div>
            </div>
        )
    } else{
        <div>
            <p>error</p>
        </div>
    }
   
};

export default Products;