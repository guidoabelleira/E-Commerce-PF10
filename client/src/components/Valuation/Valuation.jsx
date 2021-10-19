import React, { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewById, } from '../../redux/actions';
import style from './Valuation.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Valuation (props) {
    const dispatch = useDispatch()
    const id = props.props

    const reviews = useSelector(state => state.reviews)
    let stars = []
    let score = 0

    for(let r=0; r<reviews.count; r++){
        score = score + parseInt(reviews.rows[r].rating)
    }
    score = Math.floor(score / reviews.count)
    //const [score, setScore] = useState([4])
    for(let s=0; s<score; s++){
        stars.push('*')
    }

    const [showReviewText, setShowReviewText] = useState(false)

    useEffect(() => {
        try{
            dispatch(getReviewById(id))
        }
        catch(error){
            alert('eror',error)
            console.log('no se puedo encontrar el producto id:', id)
        }
    }, [dispatch, id])

    return (
        <div>

            <div className={style.Star}>
                {stars.map((star, index) =>(
                    <i
                        key={index}
                    >
                        <FontAwesomeIcon icon={ faStar }/>
                    </i>
                ))}
            </div>

            <button
                type='button'
                onClick={()=> setShowReviewText(!showReviewText)}
            >
                {
                    showReviewText?
                    "Ocultar Reseña"
                    :
                    "Mostrar Reseña"
                }
            </button>

            <div>
                {showReviewText &&

                    <>
                        {reviews.rows.map((review, index)=>
                            <p key={index}>{review.description}</p>
                        )}
                    </>
                }
            </div>

        </div>
    )
}

/*

<form>
    <button
        type='button'
        onClick={()=>setValuation(Valuation+1)}
    >
        {'+'}
    </button>
    <button
        type='button'
        onClick={()=>setValuation(Valuation-1)}
    >
        {'-'}
    </button>
</form>

*/