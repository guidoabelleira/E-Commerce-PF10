import {useAuth0} from "@auth0/auth0-react"
import React from "react"
import {NavLink as Link} from "react-router-dom"
export default function ProfileButton() {
    const {loginWithRedirect, isAuthenticated,user} = useAuth0()

    if(isAuthenticated){
        return(
            <Link to="/profile">
        <img src={user.picture} alt={user.name}/>
        </Link>)
    } else {
        return(//aqui va la imagen que haga alusion a un perfil
            <button type="button" onClick={loginWithRedirect}>debo ser una imagen</button>
        )
    }
}