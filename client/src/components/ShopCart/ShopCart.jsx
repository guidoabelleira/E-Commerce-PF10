import style from './ShopCart.module.css';
import{useDispatch, useSelector} from "react-redux"
import {NavLink as Link} from "react-router-dom"
function ShopCart() {
const products = useSelector(state => state.shopProduct)
if(products){
    return (
        <div className={style.container}>
            {products.map(e=> {
            return <div>
                <Link to={`/products/${e.id}`}>
               <img src={e.image} alt="img" width="50px"  height="50px"/>
               </Link>
               <p>{e.name}</p>
               <p>$ {e.price}</p>
               <button type="button" className={style.bttn}>Remove</button>
            </div>
        })}
        </div>
        
        
    )
} else {
    return (
        <div>
            <p>No Products Yet</p>
        </div>
    )
}
   
};

export default ShopCart;