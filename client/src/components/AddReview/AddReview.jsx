//https://meet.google.com/vxr-jcmm-zgi
import React, { useState } from "react";
import { 
    useDispatch, 
} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
/* import Valuation from '../Valuation/Valuation' */
import style from './AddReview.module.css'
import {
    postReviewById,
} from '../../redux/actions'

export default function AddReview (props){

    const dispatch = useDispatch()
    const allProducts = props.props
    //const oldProducts = useSelector(state => state.products)
    const [product, setProduct] = useState(allProducts)

    const handleProduct = event => {
        event.preventDefault()
        const newProduct = allProducts[event.target.value]
        setProduct(newProduct)
        console.log('estado de product', newProduct)
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
        <div className={style.container} >

            {/* <Valuation props={product.id}/> */}

            <h2>
                Calificar Producto
            </h2>
            <select
                className={style.selects} 
                key="targetProduct"
                id="targetProduct"
                name="targetProduct"
                onClick={event => handleProduct(event)}
                >
                {
                    allProducts.map((product, index) =>
                        <option
                            key={product.id.toString()}
                            name={product.name}
                            value={index}
                            >
                            {product.name}
                        </option>)
                }
            </select>


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
                    placeholder="Deja tu reseña sobre este producto"
                    className={style.inputs} 
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

                <button className={style.bttn}>
                    Enviar Reseña
                </button>
            </form>
        </div>
    )
    :
    <></>
}
