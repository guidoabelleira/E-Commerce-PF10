import { NavLink as Link } from 'react-router-dom';
import style from './PopularCard.module.css'
import {addPCart} from "../../redux/actions"
import {useSelector, useDispatch} from 'react-redux';

export default function PopularCard ({image, name, categories,id,price, index}){
    let products = useSelector(state => state.shopProduct)
    const dispatch = useDispatch()
    products = products?.filter(Boolean)
    const product = {image, name, categories, id, price}
   let duplicate = name.split(" ")
   
   name = [];
    name.push(duplicate[0])
    name.push(" ")
    name.push(duplicate[1])
    name.push(" ")
    name.push(duplicate[2])
    name.join("")
    return(
        <div className={style.container} key={index}>
           <Link className={style.bttn}to={`/products/${id}`}>  <img className={style.img}src={image} alt={name} height="300px" width="350px" />
            </Link>

            <h4 className={style.h4}>{name}</h4>
            <div className={style.categories}>
            {categories.map((e, i)=> {
            return <p className={style.p} key={i}>{e.name}</p>
            })}
            </div>
            
                <div onClick={e => dispatch(addPCart(product,products))} className={style.shop}>
                    <div className={style.circle}>
                        <p>+</p>
                    </div>
                    <button className={style.price}> ${price}</button>
                </div>
                
        </div>
)
}