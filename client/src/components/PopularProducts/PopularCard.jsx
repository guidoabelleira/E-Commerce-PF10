import { NavLink as Link } from 'react-router-dom';
import style from './PopularCard.module.css'
 
export default function PopularCard ({image, name, category,id,price, index}){
    return(
        <div className={style.container} key={index}>
            <p>Popular Products</p>
            <Link to={"/products"}> <button>
            <p>see all</p></button>
            </Link>
            <Link to={`/${id}`}> <img className={style.img}src={image} alt={name} height="300px" width="350px" />
            </Link>

            <h4 className={style.h4}>{name}</h4>
            {category.map((e, i)=> {
            return <p className={style.p} key={i}>{e.name}</p>
            })}
            <button>
                <p>+ ${price}</p>
            </button>
        </div>
)
}