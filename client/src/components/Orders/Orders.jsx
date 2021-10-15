import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUserOrderProcessing, getUserOrderCompleted, getUserOrderCanceled} from '../../redux/actions';

import OrderCards from "../OrderCards/OrderCards";
import Loading from '../Loading/Loading';

import style from './orders.module.css';

export default function Orders (){
    const dispatch = useDispatch();

    const state = useSelector(state => state.user)
    const verificationAdmin = state.isAdmin;

    const processing = useSelector(state => state.userOrderProcessing);
    const completed = useSelector(state => state.userOrderComplete);
    const canceled = useSelector(state => state.userOrderCanceled);
    const idUser = localStorage.getItem('idUser');
    
    useEffect(() => {
        async function getters(){
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
                    <Loading/>
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