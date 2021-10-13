import {useAuth0} from "@auth0/auth0-react"
import { useSelector } from "react-redux";
import OrderCards from "../OrderCards/OrderCards";

import style from './orders.module.css';

export default function Orders (){
    const {isAuthenticated, user} = useAuth0();
    const state = useSelector(state => state.user)
    const verificationAdmin = state.isAdmin;
    // console.log("Aca orders autentic: ", isAuthenticated);
    // console.log("Aca orders state: ", state)
    // console.log("Aca orders verification: ", verificationAdmin)
    const props = {
        verificationWest: isAuthenticated,
        verificationAdmin: verificationAdmin,
        user: user.email
    }
    // console.log("Aca orders props: ", props)
    return verificationAdmin === true ? (
        <div className={style.container}>
            <h2>Soy pedidos admin</h2>
            <OrderCards props={props}/>
        </div>
        
    ) : isAuthenticated ? (
        <div className={style.container}>
            <h2>Soy pedidos usuario</h2>
            <OrderCards props={props}/>
        </div>
        
    ) : (
        <div className={style.container}>
            <h2>Soy pedidos west</h2>
            <OrderCards props={props}/>
        </div>
    ) 
}