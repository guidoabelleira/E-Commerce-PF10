import {useAuth0} from "@auth0/auth0-react"
import React from "react"
import {NavLink as Link} from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

import style from "./ProfileButton.module.css"
export default function ProfileButton() {
    const {loginWithRedirect, isAuthenticated,user,isLoading} = useAuth0()
     if(isLoading) {
        return(
            <div>Loading...</div>)//debo ser una imagen de cargado
     }
    if(isAuthenticated){
        return(
            <div className={style.profile}>
                 <Link to="/profile">
            <img src={user.picture} alt={user.name}/>
            </Link>
            </div>
           )
    } else {
        return(//aqui va la imagen que haga alusion a un perfil
            <button className={style.profile} type="button" onClick={loginWithRedirect}>debo ser una imagen</button>
        )
    }
}