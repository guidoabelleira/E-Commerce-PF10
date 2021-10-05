import { NavLink as Link } from 'react-router-dom';
import style from './DiscountCard.module.css'
 
export default function DiscountCard ({image, name, categories,id,index}){
    let duplicate = name.split(" ")
    console.log(name)
    name = [];
     name.push(duplicate[0])
     name.push(" ")
     name.push(duplicate[1])
     name.push(" ")
     name.push(duplicate[2])
     console.log(name)
     name.join("")
    return(
        <div className={style.container} key={index}>
            <Link to={`/products/${id}`}> <img className={style.img}src={image} alt={name} height="300px" width="350px" />
            </Link>

            <h4 className={style.h4}>{name}</h4>
            <Link className={style.bttn}to={`/products/${id}`}> 
            <p>Comprar</p>
            </Link>
        </div>
)
}