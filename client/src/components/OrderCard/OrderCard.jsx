
import { Link } from "react-router-dom"
import style from "./orderCard.module.css"

export default function OrderCard({id, totalPrice, createdAt, index}){
    // voy a recibir order
    
    return (
        
        <div className={style.container} key={index}>
            <div className={style.subContainer}>
                <h4>Numero de pedido: {id}</h4>
                <p>Fecha: {createdAt.split("T")[0]}</p>
                <p className={style.price}> Total: $ {totalPrice}</p>
            </div>
            <div className={style.buttons}>
            <Link to={`/tiket/${id}`}><button className={style.bttn}>Ver Ticket</button></Link>
            {/* ver ruta tiket, crear componente tiketdetail */}
            </div>

        </div>
        
    )
}