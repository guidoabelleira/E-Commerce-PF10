import {useSelector } from 'react-redux';

export default function ShopCartButton(){
    const state = useSelector(state => state.shopProduct)
    return(
        <div>
        <button><p>{state.length} items added</p></button>
        </div>
    )
}