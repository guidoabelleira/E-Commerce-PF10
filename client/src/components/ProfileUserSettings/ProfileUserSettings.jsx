import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {getUser} from '../../redux/actions';
import { USER_LOAD } from '../../constantes';

import style from './profileUserSettings.module.css';

export default function ProfileUserSettings (idUser){
    const dispatch = useDispatch();

    let id = idUser.props;
    
    const [inputDir, setInputDir] = useState({
        input_direccion: '',
        input_numero: '',
        input_piso: '',
        input_dpto: '',
        input_cp: '',
        input_ciudad: '',
        input_provincia: ''
    })

    function handleInputChange(e) {
        setInputDir({
            ...inputDir,
            [e.target.name] : e.target.value
        })
    }

    async function changeDirection(input, id){
        try{
            // modificar address
            let address = {address: input.input_direccion + ' ' + input.input_numero + ' ' + input.input_piso + ' ' + input.input_dpto + ' ' + input.input_cp + ' ' + input.input_ciudad + ' ' + input.input_provincia};
            let response = await axios.put(USER_LOAD + id , address);
            return alert(response.data)
        } catch (error){
            alert(error)
        }
    }

    async function changeSuscribeNewsLetter(val, id){
        try{
            // modifico suscripcion al newsletter
            let newsletter = {newsletter: val};
            let response = await axios.put(USER_LOAD + id , newsletter);
            return alert(response.data)
        } catch (error){
            alert(error)
        }
    }

    
    function handleSubmit(e) {
        e.preventDefault();
        changeDirection(inputDir, id);
        dispatch(getUser(id))
        setInputDir({
            input_direccion: '',
            input_numero: '',
            input_piso: '',
            input_dpto: '',
            input_cp: '',
            input_ciudad: '',
            input_provincia: '',
            input_comentarios: ''
        })
    }
    
    return(
        <div className={style.container}>
            <h2>Settings User</h2>
            <div className={style.container}>
                <h2>Direccion de envio</h2>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label>
                            Direccion
                            <span>*</span>
                        </label>
                        <input 
                            type="text" 
                            name="input_direccion" 
                            placeholder="Direccion" 
                            required
                            onChange={handleInputChange}
                            value={inputDir.input_direccion} 
                            />
                    </p>
                    <p>
                        <label>
                            N°
                            <span>*</span>
                        </label>
                        <input 
                            type="number" 
                            name="input_numero" 
                            placeholder="Numero" 
                            required
                            onChange={handleInputChange}
                            value={inputDir.input_numero} 
                            />
                    </p>
                    <p>
                        <label>
                            Piso
                        </label>
                        <input 
                            type="text" 
                            name="input_piso" 
                            placeholder="Piso" 
                            onChange={handleInputChange}
                            value={inputDir.input_piso} 
                            />
                    </p>
                    <p>
                        <label>
                            Dpto.
                        </label>
                        <input 
                            type="text" 
                            name="input_dpto" 
                            placeholder="Depto" 
                            onChange={handleInputChange}
                            value={inputDir.input_dpto} 
                            />
                    </p>
                    <p>
                        <label>
                            Codigo Postal:
                            <span>*</span>
                        </label>
                        <input 
                            type="text" 
                            name="input_cp" 
                            placeholder="CP" 
                            required
                            onChange={handleInputChange}
                            value={inputDir.input_cp} 
                            />
                    </p>
                    <p>
                        <label>
                            Ciudad
                            <span>*</span>
                        </label>
                        <input 
                            type="text" 
                            name="input_ciudad" 
                            placeholder="Ciudad" 
                            required
                            onChange={handleInputChange}
                            value={inputDir.input_ciudad} 
                            />
                    </p>
                    <p>
                        <label>
                            Provincia
                            <span>*</span>
                        </label>
                        <input 
                            type="text" 
                            name="input_provincia" 
                            placeholder="Provincia" 
                            required
                            onChange={handleInputChange}
                            value={inputDir.input_provincia} 
                            />
                    </p>
                    <p>
                        <label>
                            Comentarios:
                        </label>
                        <textarea 
                            name="input_comentarios"
                            placeholder="Comentarios, referencias, intersecciones, horarios." 
                            onChange={handleInputChange}
                            value={inputDir.input_comentarios} 
                            />
                    </p>
                    {/* <p>
                        <label>
                            Privilegios
                            <span>*</span>
                        </label>
                        <select value={input.isAdmin} onChange={handleSelectChange}> 
                            <option value='null' selected>----</option>
                            <option value='user'>user</option>
                            <option value='admin'>admin</option>
                        </select>
                    </p>  */}
                    <button className={style.bttn} type='submit'><p>Cambiar!</p></button>
                    <p>
                        <span> * </span>
                        los campos son obligatorios.
                    </p>
                </form>
        </div>
        <div className={style.container}>
                <h3>Seccion newsletter</h3>
                <button className={style.bttn} onClick={e => changeSuscribeNewsLetter(true, id)}><p>Suscribirme</p></button>
                <button className={style.bttn} onClick={e => changeSuscribeNewsLetter(false, id)}><p>No recibir</p></button>
            </div>
        </div>
        
    )
}