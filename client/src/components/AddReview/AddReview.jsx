//https://meet.google.com/vxr-jcmm-zgi
import React, { useState } from "react";
import { 
    useDispatch, 
    useSelector 
} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Valuation from '../Valuation/Valuation'
import style from './AddReview.module.css'
import {
    postReviewById,
} from '../../redux/actions'

export default function AddReview (){

    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products)
    const [product, setProduct] = useState(allProducts[0])

    const handleProduct = event => {
        event.preventDefault()
        const newProduct = allProducts[event.target.value]
        setProduct(newProduct)
        //console.log(newProduct)
    }

    const [comment, setComment] = useState('')
    const handleReviewComment = event => {
        const newComment = { ...comment }
        newComment[event.target.name] = event.target.value
        setComment(newComment)
        //console.log(comment)
    }

    const [score, setScore] = useState(3)
    const handleReviewScore = event => {
        event.preventDefault()
        const newScore = { ...score }
        newScore[event.target.name] = event.target.value
        setScore(newScore.rating)
        //console.log(score)
    }

    const onSubmit = async event => {
        event.preventDefault()
        const sendReview = {
            "userId": Number(localStorage.getItem('idUser')),
            "productId": product.id,
            "description": comment.description,
            "rating": score
        }
        dispatch(postReviewById(sendReview))
        alert("muchas gracias por su reseña")
    }

    let stars = []
    for(let s=0; s<score; s++){
        stars.push(0)
    }



    return product ? (
        <div >

            <Valuation props={product.id}/>

            <label 
                htmlFor="targetProduct"
            >
                Seleccione el producto que desea editar
            </label>
            <select 
                key="targetProduct"
                id="targetProduct"
                name="targetProduct"
                onClick={event => handleProduct(event)}
            >
                {
                    allProducts.map(product =>
                        <option
                            key={product.id.toString()}
                            name={product.name}
                            value={product.id -1}
                        >
                            {product.name}
                        </option>)
                }
            </select>

            <h2>
                Calificar Producto
            </h2>

            <form 
                className={style.FormStyle}
                onSubmit={event => onSubmit(event)}
            > 
                
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
                    cols='80'
                    placeholder="description"
                    onChange={event => handleReviewComment(event)}
                />

                <label 
                    htmlFor="description"
                >
                    <b>
                        Calificación: 
                    </b>
                    {stars.map((star, index)=>(
                        <i
                            key={index}
                        >
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

                <button>
                    Enviar Reseña
                </button>
            </form>
        </div>
    )
    :
    <></>
}
