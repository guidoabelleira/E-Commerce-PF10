import { NavLink as Link } from 'react-router-dom';
import style from './DiscountCard.module.css'
 
export default function DiscountCard ({image, name, categories,id,index}){
    console.log(index)
    return(
        <div className={style.container} key={index}>
            <Link to={`/products/${id}`}> <img className={style.img}src={image} alt={name} height="300px" width="350px" />
            </Link>

            <h4 className={style.h4}>{name}</h4>
            <Link className={style.bttn}to={`/products/${id}`}> 
            <p>Shop Now</p>
            </Link>
        </div>
)
}