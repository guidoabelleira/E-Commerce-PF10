import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';


import style from './ContactUs.module.css';

export default function ContactUs(){
    
    const [input, setInput] = useState({
        name: "",
        email: "", 
        telephone: "",
        affair: "",
        message: "",
    })



    function handleSubmit(e){
        e.preventDefault();
        // dispatch a ruta de back
        alert("Mensaje enviado! A la brevedad lo contactaremos...")
    }

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    return (
        <div className={style.container}>
            <div className={style.tittle}>
            <a href="https://api.whatsapp.com/send?phone=34123456789">
                <FontAwesomeIcon icon={faWhatsapp}/>
                </a> 
                <h2>Contactenos!</h2>
               
            </div>
            <div className={style.form}>
                <h1>Formulario de contato:</h1>
                <h3>Escríbenos y en breve nos contactaremos.</h3>
                <form onSubmit={handleSubmit}>
                    <p>
                        {/* <label>
                            Nombre:
                            <span>*</span>
                        </label> */}
                        <input 
                            type="text" 
                            name="name_contacto" 
                            placeholder="Nombre *" 
                            required
                            onChange={handleInputChange}
                            value={input.name} 
                            className={style.input}
                            />
                    </p>
                    <p>
                        {/* <label>
                            Email:
                            <span>*</span>
                        </label> */}
                        <input 
                            type="email" 
                            name="email_contacto" 
                            placeholder="email *"
                            required
                            onChange={handleInputChange}
                            value={input.email} 
                            className={style.input}
                            />
                    </p>
                    <p>
                        {/* <label>
                            Telefono:
                        </label> */}
                        <input 
                            type="tel" 
                            name="telephone" 
                            placeholder="Número de teléfono *" 
                            required
                            onChange={handleInputChange}
                            value={input.telephone}
                            className={style.input}
                            />
                    </p>
                    <p>
                        {/* <label>
                            Asunto:
                            <span>*</span>
                        </label> */}
                        <input 
                            type="text" 
                            name="affair" 
                            placeholder="Asunto *" 
                            required
                            onChange={handleInputChange}
                            value={input.affair}
                            className={style.input}
                            />
                    </p>
                    <p>
                        {/* <label>
                            Mensaje:
                            <span>*</span>
                        </label> */}
                        <textarea 
                            name="message" 
                            placeholder="Comentario *" 
                            required
                            onChange={handleInputChange}
                            value={input.message} 
                            className={style.input}
                            />
                    </p>
                    <button className={style.bttn}type='submit'><p>Enviar</p></button>
                    <p>
                        <span> * </span>
                        Los campos son obligatorios.
                    </p>
                </form>
            </div>
        </div>
        
        
    )
}
