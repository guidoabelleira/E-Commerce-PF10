import { NavLink as Link } from 'react-router-dom';
import style from './LastedCard.module.css'
 
export default function LastedCard ({image, name, categories,id, index}){
    return(
        <div className={style.container} key={index}>
            <Link to={`/products/${id}`}> <img className={style.img}src={image} alt={name} height="300px" width="350px" />
            </Link>

            <h4 className={style.h4}>{name}</h4>
            {categories.map((e, i)=> {
            return <p className={style.p} key={i}>{e.name}</p>
            })}
            <Link to={`/${id}`}> <button>
            <p>View</p></button>
            </Link>
            <Link className={style.bttn}to={`/products/${id}`}>  <button>
            <p>Shop Now</p></button>
            </Link>
        </div>
)
}