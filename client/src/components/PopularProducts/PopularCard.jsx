import { NavLink as Link } from 'react-router-dom';
import style from './PopularCard.module.css'
import {addPCart} from "../../redux/actions"
import { useDispatch} from 'react-redux';

export default function PopularCard ({image, name, categories,id,price, index}){
    const dispatch = useDispatch()
    const product = {image, name, categories, id, price}
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
           <Link className={style.bttn}to={`/products/${id}`}>  <img className={style.img}src={image} alt={name} height="300px" width="350px" />
            </Link>

            <p className={style.h4}>{name}</p>
            <div className={style.categories}>
            {categories.map((e, i)=> {
            return <p className={style.p} key={i}>{e.name}</p>
            })}
            </div>
            
                <div onClick={e => dispatch(addPCart(product))} className={style.shop}>
                    <div className={style.circle}>
                        <p>+</p>
                    </div>
                    <button className={style.price}> ${price}</button>
                </div>
                
        </div>
)
}