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
            <div clasName={style.form}>
                <h1>Formulario de contato:</h1>
                <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label>
                            Nombre:
                            <span>*</span>
                        </label>
                        <input 
                            type="text" 
                            name="name_contacto" 
                            placeholder="Escribe tu nombre" 
                            required
                            onChange={handleInputChange}
                            value={input.name} 
                            />
                    </p>
                    <p>
                        <label>
                            Email:
                            <span>*</span>
                        </label>
                        <input 
                            type="email" 
                            name="email_contacto" 
                            placeholder="Escribe tu email"
                            required
                            onChange={handleInputChange}
                            value={input.email} 
                            />
                    </p>
                    <p>
                        <label>
                            Telefono:
                        </label>
                        <input 
                            type="tel" 
                            name="telephone" 
                            placeholder="Escribe tu telefono" 
                            required
                            onChange={handleInputChange}
                            value={input.telephone}
                            />
                    </p>
                    <p>
                        <label>
                            Asunto:
                            <span>*</span>
                        </label>
                        <input 
                            type="text" 
                            name="affair" 
                            placeholder="Escribe un asunto" 
                            required
                            onChange={handleInputChange}
                            value={input.affair}
                            />
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
                    <button className={style.bttn}type='submit'><p>Enviar</p></button>
                    <p>
                        <span> * </span>
                        los campos son obligatorios.
                    </p>
                </form>
            </div>
        </div>
        
        
    )
}
