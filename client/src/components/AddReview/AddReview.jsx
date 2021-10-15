//https://meet.google.com/vxr-jcmm-zgi
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Valuation from '../Valuation/Valuation'
import style from './AddReview.module.css'

export default function AddReview (){

    const dispatch = useDispatch()
    const [product, setProduct] = useState(
        useSelector(state => state.reviews)
    )
    const [comment, setComment] = useState('')
    const handleReviewComment = event => {
        const newComment = { ...comment }
        newComment[event.target.name] = event.target.value
        setComment(newComment)
        console.log(comment)
    }
    
    const [score, setScore] = useState(3)
    const handleReviewScore = event => {
        event.preventDefault()
        const newScore = { ...score }
        newScore[event.target.name] = event.target.value
        setScore(newScore.rating)
        console.log(score)
    }

    let stars = []
    for(let s=0; s<score; s++){
        stars.push(0)
    }

    return (
        <div className={style.FormStyle}>

            <Valuation props={1}/>

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
                    {stars.map(s=>(
                        <i>
                            <FontAwesomeIcon icon={ faStar } />
                        </i>
                    ))}
                </label>
                <input 
                    id='rating'
                    name='rating'
                    type="range"
                    min='0'
                    max='5'
                    onChange={event => handleReviewScore(event)}
                />
            </form>
        </div>
    )
}