import React, {useState} from 'react';
import axios from 'axios'
import { USER_LOAD } from '../../constantes';
import style from './settingsUserAdmin.module.css';

export default function SettingsUserAdmin (){
    // traigo todos los usuarios y los muestro

    const [input, setInput] = useState({
        id: '',
        isAdmin: false
    })

    function handleInputChange(e) {
        console.log("target: ", e.target.name)
        console.log("value: ", e.target.value)
        console.log(typeof(e.target.value))
        setInput({
            ...input,
            id: e.target.value
        })
    }
    function handleSelectChange(e){
        setInput({
            ...input,
            isAdmin: e.target.value
        })
    }

    async function putAdmin(input){
        console.log(input)
            try{
                if(input.isAdmin === 'true') {
                    let value = {
                        isAdmin: true
                    }
                    const response = await axios.put(USER_LOAD + input.id , value);
                    console.log("respuesta put: " + response.data);
                    return alert(response.data)
                }
                alert("Debe seleccionar valor admin")
            } catch (error){
                console.log(error)
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

    return(
        <div className={style.container}>
            <h2>Aca podras editar los usuarios</h2>
            <form onSubmit={handleSubmit}>
                    <p>
                        <label>
                            ID usuario
                            <span>*</span>
                        </label>
                        <input 
                            type="text" 
                            name="input_id" 
                            placeholder="id" 
                            required
                            onChange={handleInputChange}
                            defaultValue
                            value={input.id} 
                            />
                    </p>
                    <p>
                        <label>
                            Privilegios
                            <span>*</span>
                        </label>
                        <select value={input.isAdmin} onChange={handleSelectChange}> 
                            <option selected value={false}>user</option>
                            <option value={true}>admin</option>
                        </select>
                    </p> 
                    <button type='submit'><p>Cambiar!</p></button>
                    <p>
                        <span> * </span>
                        los campos son obligatorios.
                    </p>
                </form>
        </div>
    )
}