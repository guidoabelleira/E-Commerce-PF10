import React, {useState, useEffect}from "react"
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import {USER_LOAD} from '../../constantes'

import {getAllUser} from '../../redux/actions';

import style from '../SettingsIsActiveAdmin/settingsIsActiveAdmin.module.css';


export default function SettingsIsActiveAdmin (){
    const dispatch = useDispatch();

    const allUser = useSelector(state => state.userAll);
    // console.log("AllUsers: ", allUser.rows)

    const allUserInactive = allUser?.rows?.filter(e => e.isActive === false)

    const [input, setInput] = useState({
        id: '',
        isActive: ''
    })

    function handleSelectActive(e) {
        setInput({
            ...input,
            isActive: e.target.value
        })
    }
    function handleSelectChange(e){
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
    }

    useEffect(() => {
        async function getters(){
            await dispatch(getAllUser());
        }
        getters();
    },[dispatch]);


    return allUser ?(
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <select className={style.selects} onChange={handleSelectChange}>
                    <option defaultValue={false} selected>----- </option>
                        {
                            allUser?.rows?.map(e => {
                                return (
                                <option key={e.id} value={e.id}>{e.email}</option>
                                )
                            })
                        }
                </select>
                <select defaultValue={input.isActive} onChange={handleSelectActive}> 
                            <option value='null' selected>----</option>
                            <option value='true'>active</option>
                            <option value='false'>bloquear</option>
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