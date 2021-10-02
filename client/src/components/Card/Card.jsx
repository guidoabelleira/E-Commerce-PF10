import { NavLink as Link } from 'react-router-dom';
import style from './Card.module.css'
 
export default function Card ({image, name, categories,id,price, index}){
    return(
        <div className={style.container} key={index}>
            <Link to={`/${id}`}> <img className={style.img}src={image} alt={name} height="300px" width="350px" />
            </Link>

            <h4 className={style.h4}>{name}</h4>
            {categories.map((e, i)=> {
            return <p className={style.p} key={i}>{e.name}</p>
            })}
            <button>
                <p>+ ${price}</p>
            </button>
        </div>
)
}