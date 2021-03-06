import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {getUserOrderProcessing, getUserOrderCompleted, getUserOrderCanceled} from '../../redux/actions';

import OrderCards from "../OrderCards/OrderCards";

import style from './orders.module.css';

export default function Orders (){
    const dispatch = useDispatch();
    
    const processing = useSelector(state => state.userOrderProcessing, shallowEqual);
    const completed = useSelector(state => state.userOrderComplete, shallowEqual);
    const canceled = useSelector(state => state.userOrderCanceled, shallowEqual);
    const idUser = localStorage.getItem('idUser');
    
    useEffect(() => {
        async function getters(){
            await dispatch(getUserOrderProcessing(idUser));
            await dispatch(getUserOrderCompleted(idUser));
            await dispatch(getUserOrderCanceled(idUser));
        }
        getters();
    }, [dispatch, idUser]);
    
    return (
        <div className={style.container}> 
            <div className={style.margin}>
                <h2>User</h2>
                {processing ? (
                    <div className={style.cards}>
                        <div className={style.seeAll}>
                            <p  className={style.h3Primario}>Pendientes: </p>
                        </div>
                        <div className={style.render}>
                            <OrderCards state={processing} />
                        </div>
                    </div>

                ) : (
                    <p>No hay pendientes</p>
                )}
                

                {completed ? (
                    <div className={style.cards}>
                        <div className={style.seeAll}>
                            <p  className={style.h3Primario}>Completadas: </p>
                        </div>
                        <div className={style.render}>
                            <OrderCards state={completed} />
                        </div>
                    </div>
                ) : (
                    <p>No hay completadas</p>
                )}
                

                {canceled ? (
                    <div className={style.cards}>
                    <div className={style.seeAll}>
                        <p  className={style.h3Primario}>Canceladas: </p>
                    </div>
                    <div className={style.render}>
                        <OrderCards state={canceled} />
                    </div>
                </div>
                ) : (
                    <p>No hay canceladas</p>
                )}

            </div>
   
        </div>
    )  
}