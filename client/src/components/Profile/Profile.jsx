import {useAuth0} from "@auth0/auth0-react"
import style from "./Profile.module.css"

export default function Profile(){
    const {user,isAuthenticated, logout} = useAuth0();
    let uwu = useAuth0();
  if(isAuthenticated){
    return(<div className={style.container}>
        <img src={user.picture} alt={user.name}/>
        <h3>nombre: {user.name}</h3>
        <p>email: {user.email}</p>
        <button type="button" onClick={e=> logout({returnTo: window.location.origin})}>Logout</button>
        </div> )
  } else {
      <div className={style.container}>
          <p>something is wrong</p>
      </div>
  }
}