import { NavLink as Link } from 'react-router-dom';
import style from './PopularCard.module.css'
import {addPCart} from "../../redux/actions"
import { useDispatch} from 'react-redux';

export default function PopularCard ({image, name, categories,id,price, index}){
    const dispatch = useDispatch()
    const product = {image, name, categories, id, price}
    return(
        <div className={style.container} key={index}>
           <Link className={style.bttn}to={`/products/${id}`}>  <img className={style.img}src={image} alt={name} height="300px" width="350px" />
            </Link>

            <h4 className={style.h4}>{name}</h4>
            {categories.map((e, i)=> {
            return <p className={style.p} key={i}>{e.name}</p>
            })}
                <div onClick={e => dispatch(addPCart(product))} className={style.shop}>
                    <div className={style.circle}>
                        <p>+</p>
                    </div>
                    <p className={style.price}> ${price}</p>
                </div>
                
        </div>
)
}