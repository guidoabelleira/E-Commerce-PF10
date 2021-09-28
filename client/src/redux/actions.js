import axios from 'axios';

export const exampleFunction = example =>{
    return {
        type: "EXAMPLE",
        payload: example
    }
}

export function getProductByName(name) {
    return async function(dispatch) {
        try {
            let json = await axios.get('' + name)
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