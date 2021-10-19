import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {getAdminOrdersProcessing, getAdminOrdersComplete, getAdminOrdersCanceled} from '../../redux/actions';

import OrderCardsAdmin from '../OrderCardsAdmin/OrderCardsAdmin';

import Loading from '../Loading/Loading';

import style from './ordersAdmin.module.css';

export default function Orders (){
    const dispatch = useDispatch();

    const allProcessing = useSelector(state => state.allOrdersProcessing, shallowEqual);
    const allCompleted = useSelector(state => state.allOrdersComplete, shallowEqual);
    const allCanceled = useSelector(state => state.allOrdersCanceled, shallowEqual);
    
    useEffect(() => {
        async function getters(){
            await dispatch(getAdminOrdersProcessing());
            await dispatch(getAdminOrdersComplete());
            await dispatch(getAdminOrdersCanceled());
        }
        getters();
    }, [dispatch]);
    
    return (
        <div className={style.container}> 
            <div className={style.margin}>
                <h2>Admin</h2>
                {allProcessing ? (
                    <div className={style.cards}>
                        <div className={style.seeAll}>
                            <p  className={style.h3Primario}>Pendientes: </p>
                        </div>
                        <div className={style.render}>
                            <OrderCardsAdmin state={allProcessing} />
                        </div>
                    </div>

                ) : (
                    <p>No hay pendientes</p>
                )}
                

                {allCompleted ? (
                    <div className={style.cards}>
                        <div className={style.seeAll}>
                            <p  className={style.h3Primario}>Completadas: </p>
                        </div>
                        <div className={style.render}>
                            <OrderCardsAdmin state={allCompleted} />
                        </div>
                    </div>
                ) : (
                    <Loading/>
                )}
                

                {allCanceled ? (
                    <div className={style.cards}>
                    <div className={style.seeAll}>
                        <p  className={style.h3Primario}>Canceladas: </p>
                    </div>
                    <div className={style.render}>
                        <OrderCardsAdmin state={allCanceled} />
                    </div>
                </div>
                ) : (
                    <Loading/>
                )}

            </div>
            
        </div>
        
    )
}