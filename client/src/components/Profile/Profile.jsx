import {useAuth0} from "@auth0/auth0-react"
import style from "./Profile.module.css"
import LogoutButton from "../LoginButton/LoginButton";
export default function Profile(){
  const {user,isAuthenticated, logout} = useAuth0();
  try {
    
  if(isAuthenticated){
    return(<div className={style.container}>
        <img src={user.picture} alt={user.name}/>
        <div className={style.text}>
        <h3> {user.name}</h3>
        <p>Name: {user.given_name}</p>
        <p>Last Name: {user.family_name}</p>
        <p>email: {user.email}</p>
        </div>
        <div className={style.login}>
                <LogoutButton/>
            </div>
        </div> )
  } else {
    return(  <div className={style.container}>
          <p>something is wrong</p>
      </div>
    )
  }
} catch {
  return (<div>
    <p>something is wrong</p>
  </div>)
}
}