import style from './ShopCart.module.css';
import{useDispatch, useSelector} from "react-redux"
import {NavLink as Link} from "react-router-dom"
import {removeShopCart} from "../../redux/actions"
import removeProductShopCart from '../Hooks/removeProductShopCart';
function ShopCart() {
    const dispatch = useDispatch()
let products = useSelector(state => state.shopProduct)
console.log(products)
if(products){
    products = products?.filter(Boolean)
    return (
        <div className={style.container}>
            {products.map((e, i)=> {
            return <div key={i} >
                <Link to={`/products/${e.id}`}>
               <img src={e.image} alt="img" width="50px"  height="50px"/>
               </Link>
               <p>{e.name}</p>
               <p>$ {e.price}</p>
               <p> {e.count}</p>
               <button type="button" className={style.bttn} onClick={a => dispatch(removeShopCart(removeProductShopCart(products, e)))}>Remove</button>
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