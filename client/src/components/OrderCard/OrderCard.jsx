
import style from "./orderCard.module.css"

export default function OrderCard(allOrderUser){
    // voy a recibir order
    console.log("orden all: ", allOrderUser)
    return (
        <div className={style.container}>
            <p>Order Card</p>
        </div>
        
    )
}