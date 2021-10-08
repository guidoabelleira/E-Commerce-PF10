import Card from "../Card/Card"
import Loading from "../Loading/Loading"
import style from "./AuxiliarCards.module.css"

export default function AuxiliarCards({state}){
    
        return state.length > 0 ? (
            <div className={style.container}>
                {state.map((e, i) => {
                    if(e?.onStock){
                        return(
                            <div key={i} className={style.card}> 
                            <Card id={e.id} 
                                image={e.image} 
                                name={e.name} 
                                categories={e.categories} 
                                price={e.price} 
                                index={i} />
                            </div>
                        )
                    }
                    return
                })}
            </div>
        ):(
            <Loading/>
        )
}