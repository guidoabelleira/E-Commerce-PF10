
import React, {useEffect} from 'react'
import style from "./Profile.module.css"
import LogoutButton from "../LoginButton/LoginButton";
import SettingsUserAdmin from "../SettingsUserAdmin/SettingsUserAdmin";
import { useDispatch, useSelector } from "react-redux";
import {getUser} from '../../redux/actions';
import ProfileUserSettings from "../ProfileUserSettings/ProfileUserSettings";
import Loading from '../Loading/Loading';
import SettingsIsActiveAdmin from '../SettingsIsActiveAdmin/SettingsIsActiveAdmin';


export default function Profile(){
    const dispatch = useDispatch()

    const stateUser = useSelector(state => state.user[0]);
    const idLocal = localStorage.getItem('idUser')
    
    useEffect(() => {
        async function getters(){
            await dispatch(getUser(idLocal));
        }
        getters();
    },[dispatch, idLocal]);
    
    return stateUser? (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <img src={stateUser.image} alt={stateUser.name}/>
                <div className={style.text}>
                    <h3>{stateUser.name} {stateUser.family_name}</h3>
                    <p>Email: {stateUser.email}</p>
                    {stateUser.userRole === 'superadmin' ? (
                        <p>Super Admin</p>
                    ):(<p></p>)}
                    {stateUser.isAdmin === true ? (
                        <p>Usuario: Admin</p>
                    ):(<p></p>)}
                    {stateUser.address !== null? (
                        <p>Direccion de envio actual: 
                        <br/>
                        {stateUser.address}</p>
                    ):(<p className={style.warning}>Direccion de envio no aclarada!</p>)}
                </div>
                <div className={style.login}>
                    <LogoutButton/>
                </div>
            </div>
            
            <div className={style.secondContainer}>
                <div className={style.settings}>
                    <ProfileUserSettings props={idLocal}/>
                </div>
            </div>
        
            <div className={style.thirdContainer}>
                <div className={style.settings}>
                    <h2>Configurar cuenta Admin</h2>
                    <SettingsUserAdmin/>
                </div>
                <div className={style.settings}>
                    <h2>Bloquear cuentas</h2>
                    <SettingsIsActiveAdmin />
                </div>
            </div>
        </div> ) : (
                    <Loading/>
                )
        
}