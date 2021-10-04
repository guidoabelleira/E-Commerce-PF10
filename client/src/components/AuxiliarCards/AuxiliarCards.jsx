import Card from "../Card/Card"
import style from "./AuxiliarCards.module.css"
export default function AuxiliarCards({state}){
    if(state.length > 0){
        return(
            <div className={style.container}>
                {state.map((e, i)=> {
                    return( <div key={i} clasName={style.card}> <Card id={e.id} image={e.image} name={e.name} categories={e.categories} price={e.price} index={i} />
                    </div>)
                })}
            </div>
        )
    }
}