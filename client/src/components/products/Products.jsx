import { useState } from 'react';
import { useSelector } from 'react-redux';

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
   
    const state = useSelector(state => state.products)
    
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
                        previousLabel={"Anterior"}
                        nextLabel={"Siguiente"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={style.paginationContainer}
                        previousClassName= {style.bttnLi}
                        nextClassName={style.bttnLi}
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