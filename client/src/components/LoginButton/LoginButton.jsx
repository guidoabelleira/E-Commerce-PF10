import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
import style from "./LoginButton.module.css"
export default function LogoutButton (){
    const {logout,loginWithRedirect,isAuthenticated} = useAuth0()
   if(isAuthenticated){
    return(
        <button className={style.button} type="button" onClick={e=> logout({returnTo: window.location.origin})}>Logout</button>
    )
   }else {
    return(
        <button className={style.button}  type="button" onClick={e=> loginWithRedirect()}>Login</button>
    )
   }
}