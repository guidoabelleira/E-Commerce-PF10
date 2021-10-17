
import { Link } from "react-router-dom"
import style from "./orderCard.module.css"

export default function OrderCard({id, totalPrice, createdAt, index}){
    // voy a recibir order
    console.log("id: ", id, " Total: ", totalPrice)


    return (
        
        <div className={style.container} key={index}>
            <div className={style.subContainer}>
                <h4>Numero de pedido: {id}</h4>
                <p>Fecha: {createdAt}</p>
                <p className={style.price}> Total: $ {totalPrice}</p>
            </div>
            <div className={style.buttons}>
            </div>
            <Link to={`/tiket/${id}`}><button>Ver Ticket</button></Link>
            {/* ver ruta tiket, crear componente tiketdetail */}

        </div>
        
    )
}