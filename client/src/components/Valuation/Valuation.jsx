import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../redux/store'
//import Style from './Valuation.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Valuation (props) {
    const dispatch = useDispatch()
    const products = store.getState()
    console.log('-->',props) // no tengo el dato del back
    const [valuation, setValuation] = useState(0)
    
    const handleOnCHeck = event =>{
       setValuation(event.target.value)
       console.log(valuation)
    }

    const handleOnSubmit = event =>{
        

    }

    let stars = []
    for(let s=0; s<valuation; s++){
        stars.push(0)
    }

    return (
        <div>
            <label for="addValuation">Valuation</label>
            <form>
                <input
                    id="addValuation"
                    name="valuation"
                    placeholder={valuation}
                    type='range'
                    min="0"
                    max="5"
                    onChange={event => handleOnCHeck(event)}
                />

                <input
                    onSubmit={event => handleOnSubmit(valuation)}
                    type="submit"
                />

            </form>

            <div >
                {stars.map(stars =>(
                    <i>
                        <FontAwesomeIcon icon={ faStar }/>
                    </i>
                ))}
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