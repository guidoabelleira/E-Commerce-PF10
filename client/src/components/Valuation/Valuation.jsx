import { useState } from 'react';
import store from '../../redux/store'
import goldStar from '../img/goldStar.png'



export default function Valuation () {

    const products = store.getState()
    const [valuation, setValuation] = useState(0)
    
    const handleOnCHeck = event =>{
       setValuation(event.target.value)
       console.log(valuation)
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
                    type='number'
                    onChange={event => handleOnCHeck(event)}
                />

                <input
                    type="submit"
                />

            </form>

            <div>
                {stars.map(stars =>(
                    <img src={goldStar} alt="" />
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