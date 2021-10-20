import React, {useState, useEffect}from "react"
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import {USER_LOAD} from '../../constantes'

import {getAllUserByMail} from '../../redux/actions';

import style from '../SettingsIsActiveAdmin/settingsIsActiveAdmin.module.css';


export default function SettingsIsActiveAdmin (){
    const dispatch = useDispatch();

    const allUser = useSelector(state => state.userAllByMail);

    const allUserInactive = allUser?.filter(e => e.isActive === false)

    const [input, setInput] = useState({
        id: '',
        isActive: ''
    })

    function handleSelectActive(e) {
        // console.log("active: ", e.target.value)
        setInput({
            ...input,
            isActive: e.target.value
        })
    }
    function handleSelectChange(e){
        // console.log("id: ", e.target.value)
        setInput({
            ...input,
            id: e.target.value
        })
    }

    async function putActive(input){
            try{
                if(input.isActive === 'true') {
                    let value = {
                        isActive: true
                    }
                    const response = await axios.put(USER_LOAD + input.id , value);
                    return alert(response.data)
                }
                if(input.isActive === 'false') {
                    let value = {
                        isActive: false
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
        putActive(input);
        setInput({
            id: '',
            isActive: ''
        })
        window.location.reload()
    }

    useEffect(() => {
        async function getters(){
            await dispatch(getAllUserByMail());
        }
        getters();
    },[dispatch]);


    return allUser ?(
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <select className={style.selects} onChange={handleSelectChange}>
                    <option defaultValue={false} selected> Buscar por email </option>
                        {
                            allUser?.map(e => {
                                return (
                                <option key={e.id} value={e.id}>{e.email}</option>
                                )
                            })
                        }
                </select>
                <select className={style.selects} onChange={handleSelectActive}> 
                            <option value='null' selected>----</option>
                            <option value='true'>Activar</option>
                            <option value='false'>Bloquear</option>
                        </select>
                <button className={style.bttn} type='submit'><p>Cambiar!</p></button>
            </form>
            </div>
            
            <div>
                <h3>Usuarios Bloqueados:</h3>
                {allUserInactive ? (
                    <ul>
                    {allUserInactive.map(e => {
                        return (
                            <li key={e.id}>
                                <p>{e.email}</p>
                            </li>
                        )
                    })}
                </ul>
                ) : (<></>)}
                
            </div>
        </div>
    ) : (
        <p>loading...</p>
    )
}