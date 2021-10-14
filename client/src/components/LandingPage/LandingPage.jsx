import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions';



import style from './landingPage.module.css';

export default function LandingPage (){
    const dispatch = useDispatch();
    const state = useSelector(state => state.user[0])
    const idLocal = localStorage.getItem('idUser')
    
    useEffect(() => {
        async function getters(){
            await dispatch(getUser(idLocal));
        }
        getters();
    },[dispatch, idLocal]);
    
    return (
        <div className={style.container}>
            <h2>Bienvenido!!! </h2>
            {state ? (<h3>{state.name}</h3>) : (<h3> Registrate para una mejor experiencia!</h3>)}
        </div>
    ) 
}