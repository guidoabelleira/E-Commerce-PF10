import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getAllProducts, getAllCategories } from '../../redux/actions';



import style from './landingPage.module.css';

export default function LandingPage (){
    const dispatch = useDispatch();
    const state = useSelector(state => state.user[0])
    const idLocal = localStorage.getItem('idUser')
    
    useEffect(() => {
        async function getters(){
            await dispatch(getUser(idLocal));
            await dispatch(getAllProducts());
            await dispatch(getAllCategories());
        }
        getters();
    },[dispatch, idLocal]);
    
    return (
        <div className={style.container}>
            <h1>Hola  </h1>
            {state ? (<h2>{state.name}</h2>) : (<h3> Registrate para una mejor experiencia!</h3>)}
            <br></br>
            <h3>Bienvenid@ a Mates-Mati </h3>
            <br></br>
            <br></br>
            Estamos a su disposición!
            
        </div>
    ) 
}