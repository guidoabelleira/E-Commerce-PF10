import axios from 'axios';

export const exampleFunction = example =>{
    return {
        type: "EXAMPLE",
        payload: example
    }
}

export function getProductByName(input) {
    return async function(dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/products?name=' + input)
            return dispatch ({
                type: 'GET_RECIPE_BY_NAME',
                payload: json.data
            })
        }
        catch(error) {
            console.log(error)
        }
    }
}

export function orderAscDesc(payload) {
    return {
        type: 'ORDER_ASC_DESC',
        payload
    }
}

export function orderByPrice(payload) {
    return {
        type: 'ORDER_BY_PRICE',
        payload
    }
}