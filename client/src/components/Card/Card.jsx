import { NavLink as Link } from 'react-router-dom';
import style from './Card.module.css'
import {addPCart} from "../../redux/actions"
import { useDispatch, useSelector } from 'react-redux';
export default function Card ({image, name, categories,id,price, index}){
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
// Prueba con css
// {/* <div className={style.body}>
//     <div className={style.wrapper}>
//         <div className={style.card}>
//             <div className={style.front}>
//                 <h1>{name}</h1>
//                 <p>Rate<span>{price}</span></p>
//                 <p className={style.price}>$ 89.00</p>
//             </div>
//         <div className={style.right}>
//             <h2>Categoria</h2>
        
//             <ul>
//                 {categories.map((e,i) => {
//                     return <li key={i}>{e.name}</li>
//                 })}
//             </ul>
//             <button onClick={e => dispatch(addPCart(product))}>Add to cart, yo</button>
//         </div>
//     </div>
//     <div className={style.imgWrapper}>
//         <img src={image} alt=''/>    
//     </div>
//     </div>
// </div> */}
// )}