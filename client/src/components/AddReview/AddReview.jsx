//https://meet.google.com/vxr-jcmm-zgi
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import style from '../UpdateProduct/UpdateProduct.module.css'

export default function AddReview (){

    const dispatch = useDispatch()
    const [product, setProduct] = useState(
        useSelector(state => state.reviews)
    )

    return (
        <div className={style.FormStyle}>
            <h2>
                Calificar Producto
            </h2>

            <form className={style.FormStyle}> 
                
                <label 
                    htmlFor="description"
                >
                    <b>
                        Descripción: 
                    </b>
                </label>
                <textarea 
                    id='description'
                    name='description'
                    rows='10'
                    cols='150'
                    placeholder="description"
                />

                <label 
                    htmlFor="description"
                >
                    <b>
                        Calificación: 
                    </b>
                </label>
                <input 
                    id='rating'
                    name='rating'
                    type="range"
                    placeholder="rating"
                />
            </form>
        </div>
    )
}