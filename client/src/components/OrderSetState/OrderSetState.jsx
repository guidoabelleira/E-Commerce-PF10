import React, {useState} from 'react';
import axios from 'axios'

import style from './orderSetState.module.css';

export default function OrderSetState (id){

    const [input, setInput] = useState({
        idOrder: id.id,
        state: 'null',
        message: ''
    })

    function handleInputChange(e) {
        setInput({
            ...input,
            message: e.target.value
        })
    }
    function handleSelectChange(e){
        console.log(e.target.value)
        setInput({
            ...input,
            state: e.target.value
        })
    }

    async function putOrder(input){
        console.log(input.idOrder)
            try{
                if(input.state === 'completed') {
                    let check = {state:'Complete'}
                    await axios.put('/orders/checkout/' + input.idOrder, check);
                    return alert("Pedido: " + input.idOrder +" Completada!")
                }
                if(input.state === 'canceled') {
                    let check = {state:'Canceled'}
                    await axios.put('/orders/checkout/' + input.idOrder, check);
                    return alert("Pedido: " + input.idOrder +" Cancelada!")
                }
                alert("Debe seleccionar estado")
            } catch (error){
                console.log(error)
            }
    }

    function handleSubmit(e) {
        e.preventDefault();
        putOrder(input);
        setInput({
            state: 'null',
            message: ''
        })
    }

    return(
        <div className={style.container}>
            <h2>Editar Order</h2>
            <form onSubmit={handleSubmit}>
                    
                    <p>
                        <label>
                            Estado
                            <span>*</span>
                        </label>
                        <select defaultValue={input.state} onChange={handleSelectChange}> 
                            <option value='null' selected>----</option>
                            <option value='completed'>Completada</option>
                            <option value='canceled'>Cancelar</option>
                        </select>
                    </p> 

                    <p>
                    <label>
                            Mensaje:
                            <span>*</span>
                        </label>
                        <textarea 
                            name="message" 
                            placeholder="Deja aqui tu comentario" 
                            required
                            onChange={handleInputChange}
                            value={input.message} 
                            />
                    </p>

                    <p>
                        <span> * </span>
                        los campos son obligatorios.
                    </p>

                    <button type='submit'><p>Enviar</p></button>

                </form>
        </div>
    )
}