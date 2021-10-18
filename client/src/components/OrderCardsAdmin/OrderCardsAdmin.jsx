import OrderCardAdmin from '../OrderCardAdmin/OrderCardAdmin';
import OrderSetState from '../OrderSetState/OrderSetState';


import style from './orderCardsAdmin.module.css';

export default function OrderCardsAdmin ({state}){
    
    console.log("state OrdCards: ", state);
    

    return state[0] ? (
        <div className={style.container}>
            <div className={style.parent}>

                {state.map((e, i) => {
                    return (
                        <div className={style.cards} key={i}>
                            <OrderCardAdmin id={e.id} totalPrice={e.totalPrice} createdAt={e.createdAt} index={i}/>
                            <OrderSetState id={e.id}/>
                        </div>
                    )
                }

                )}

            </div>



        </div>
        
        
    ) : (
        <p>Aun no hay datos</p>
    )
}