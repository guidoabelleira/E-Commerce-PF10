import { useDispatch, useSelector } from 'react-redux';
import {getUserOrderProcessing, getUserOrderCompleted, getUserOrderCanceled} from '../../redux/actions';
import { useEffect } from 'react';
import OrderCard from '../OrderCard/OrderCard';

import style from './orderCards.module.css';

export default function OrderCards (props){
    // por las props hago llamada de ordenes a la api (redux) y envio a OrderCard los 3 estados distintos
    // en props recibo 
    const dispatch = useDispatch();
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

    return (
        <div className={style.container}>
            <div>
                <OrderCard props={processing} />
                <h2>Soy los pedidos en pendientes</h2>
            </div>
            <div >
                <OrderCard props={completed} />
                <h2>Soy los pedidos completados</h2>
            </div>
            <div>
                <OrderCard props={canceled} />
                <h2>Soy los pedidos cancelados</h2>
            </div>
        </div>
        
        
    )
}