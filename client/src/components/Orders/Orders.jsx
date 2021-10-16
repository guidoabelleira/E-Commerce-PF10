import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUserOrderProcessing, getUserOrderCompleted, getUserOrderCanceled, getAdminOrdersProcessing, getAdminOrdersComplete, getAdminOrdersCanceled} from '../../redux/actions';

import OrderCardsAdmin from '../OrderCardsAdmin/OrderCardsAdmin';
import OrderCards from "../OrderCards/OrderCards";
import Loading from '../Loading/Loading';

import style from './orders.module.css';

export default function Orders (){
    const dispatch = useDispatch();

    const state = useSelector(state => state.user[0])
    const verificationAdmin = state?.isAdmin;
    // console.log("verification admin order: ", verificationAdmin)
    const allProcessing = useSelector(state => state.allOrdersProcessing);
    const allCompleted = useSelector(state => state.allOrdersComplete);
    const allCanceled = useSelector(state => state.allOrdersCanceled);

    const processing = useSelector(state => state.userOrderProcessing);
    const completed = useSelector(state => state.userOrderComplete);
    const canceled = useSelector(state => state.userOrderCanceled);
    const idUser = localStorage.getItem('idUser');
    
    useEffect(() => {
        async function getters(){
            await dispatch(getAdminOrdersProcessing());
            await dispatch(getAdminOrdersComplete());
            await dispatch(getAdminOrdersCanceled());
            await dispatch(getUserOrderProcessing(idUser));
            await dispatch(getUserOrderCompleted(idUser));
            await dispatch(getUserOrderCanceled(idUser));
        }
        getters();
    }, [dispatch, idUser]);
    
    return verificationAdmin === true ? (
        <div className={style.container}> 
            <div className={style.margin}>
                <h2>Admin</h2>
                {processing ? (
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
                

                {completed ? (
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
                

                {canceled ? (
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
        
        
    ) : (
        <div className={style.container}> 
            <div className={style.margin}>
            <h2>Usuario</h2>
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
                    <p>Aun no hay completadas</p>
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