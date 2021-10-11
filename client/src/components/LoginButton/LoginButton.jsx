import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import style from "./LoginButton.module.css"

export default function LogoutButton (){
    const {logout , loginWithRedirect , isAuthenticated} = useAuth0();

    function logOut(){
        logout({returnTo: window.location.origin});
        localStorage.removeItem('idUser');
        localStorage.removeItem('shopCart');
    }

   if(isAuthenticated){
    return(
        <button className={style.button} type="button" onClick={e=> logOut()}>
        <i><FontAwesomeIcon icon={faSignOutAlt}/></i>
        Logout
        </button>
    )
   }else {
    return(
        <button className={style.button}  type="button" onClick={e=> loginWithRedirect()}>
        <i><FontAwesomeIcon icon={faSignInAlt}/></i>
          Login
        </button>
    )
   }
}