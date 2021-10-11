import {useAuth0} from "@auth0/auth0-react"
import React, {useEffect} from 'react'
import style from "./Profile.module.css"
import LogoutButton from "../LoginButton/LoginButton";
import SettingsUserAdmin from "../SettingsUserAdmin/SettingsUserAdmin";
import { useDispatch, useSelector } from "react-redux";
import {getUser} from '../../redux/actions';


export default function Profile(){
    const dispatch = useDispatch()
    const {user,isAuthenticated} = useAuth0();
    const stateUser = useSelector(state => state.user[0]);
    const idLocal = localStorage.getItem('idUser')
    useEffect(() => {
        async function getters(){
            await dispatch(getUser(idLocal));
        }
        getters();
    },[dispatch, idLocal]);
    try {
        if(isAuthenticated){
            console.log(user.picture)
            return(
            <div className={style.container}>
                <img src={user.picture} alt={user.name}/>
                <div className={style.text}>
                    <h3> {user.name}</h3>
                    <p>Name: {user.given_name}</p>
                    <p>Last Name: {user.family_name}</p>
                    <p>email: {user.email}</p>
                    {stateUser.isAdmin === true ? (
                        <p>Usuario: Admin</p>
                    ):(<p></p>)}
                </div>
                <div className={style.login}>
                    <LogoutButton/>
                </div>
                <div>
                    <SettingsUserAdmin/>
                </div>
            </div> )
        } else {
            return(  
                <div className={style.container}>
                    <p>something is wrong</p>
                </div>
            )
        }
        } catch {
            return (
                <>
                    <p>something is wrong</p>
                </>
            )
        }
}