import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {getAllUserByMail} from '../../redux/actions';

import { USER_LOAD } from '../../constantes';
import style from './settingsUserAdmin.module.css';


export default function SettingsUserAdmin (){
    
    const dispatch = useDispatch();

    const allUser = useSelector(state => state.userAllByMail);

    const [input, setInput] = useState({
        id: '',
        isAdmin: ''
    })

    function handleSelectChange(e){
        setInput({
            ...input,
            id: e.target.value
        })
    }
    function handleSelectIsAdmin(e){
        setInput({
            ...input,
            isAdmin: e.target.value
        })
    }

    async function putAdmin(input){
            try{
                if(input.isAdmin === 'admin') {
                    let value = {
                        isAdmin: true
                    }
                    const response = await axios.put(USER_LOAD + input.id , value);
                    return alert(response.data)
                }
                if(input.isAdmin === 'user') {
                    let value = {
                        isAdmin: false
                    }
                    const response = await axios.put(USER_LOAD + input.id , value);
                    return alert(response.data)
                }
                alert("Debe seleccionar valor admin")
            } catch (error){
                alert(error)
            }
    }

    function handleSubmit(e) {
        e.preventDefault();
        putAdmin(input);
        setInput({
            id: '',
            isAdmin: false
        })
    }

    useEffect(() => {
        async function getters(){
            await dispatch(getAllUserByMail());
        }
        getters();
    },[dispatch]);

    return(
        <div className={style.container}>
            <h2>Editar Usuarios</h2>
            <form onSubmit={handleSubmit}>
                <select className={style.selects} onChange={handleSelectChange}>
                    <option defaultValue={false} selected> Buscar por email * </option>
                        {
                            allUser?.map(e => {
                                return (
                                <option key={e.id} value={e.id}>{e.email}</option>
                                )
                            })
                        }
                </select>
                    <p>
                        <select className={style.selects} onChange={handleSelectIsAdmin}> 
                            <option value='null' selected>Privilegios *</option>
                            <option value='user'>User</option>
                            <option value='admin'>Admin</option>
                        </select>
                    </p> 
                    <button className={style.bttn}  type='submit'><p>Cambiar!</p></button>
                    <p>
                        <span> * </span>
                        los campos son obligatorios.
                    </p>
                </form>
        </div>
    )
}