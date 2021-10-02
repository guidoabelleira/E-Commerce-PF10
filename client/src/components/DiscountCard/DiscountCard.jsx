import { NavLink as Link } from 'react-router-dom';
import style from './DiscountCard.module.css'
 
export default function DiscountCard ({image, name, category,id,index}){
    return(
        <div className={style.container} key={index}>
            <p>20% discount</p>
            <Link to={`/products`}> <button>
            <p>see all</p>
            </button>
            </Link>
            <Link to={`/products/${id}`}> <img className={style.img}src={image} alt={name} height="300px" width="350px" />
            </Link>

            <h4 className={style.h4}>{name}</h4>
            {category.map((e, i)=> {
            return <p className={style.p} key={i}>{e.name}</p>
            })}
            <Link to={`/${id}`}> <button>
            <p>Shop Now</p></button>
            </Link>
        </div>
)
}