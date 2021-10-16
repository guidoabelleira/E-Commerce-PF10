import { Link } from "react-router-dom"
import style from "./orderCardAdmin.module.css"

export default function OrderCardAdmin({id, totalPrice, createdAt, index}){
    // voy a recibir order
    


    return (
        
        <div className={style.container} key={index}>
            <div className={style.subContainer}>
                <h4>Pedido: {createdAt}</h4>
                <p>id: {id}</p>
                <p>Precio total: {totalPrice}</p>
            </div>
            <div className={style.buttons}>
            <Link to={`/tiket/${id}`}><button>Ticket</button></Link>
            {/* ver ruta tiket, crear componente tiketdetail */}
            </div>
            
        </div>
        
    )
}