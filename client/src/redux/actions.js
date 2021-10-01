import axios from 'axios';

export function getProductByID (id) {
    return async function(dispatch){
        try{
            let json = await axios.get('' + id)
            return dispatch ({
                type: 'GET_PRODUCT_BY_ID',
                payload: json.data
            })
        }
        catch(error) {
            console.log(error)
        }
    }
}

export function getProductByName (input) {
    return async function(dispatch) {
        try {
            let json = await axios.get('' + input)
            return dispatch ({
                type: 'GET_PRODUCT_BY_NAME',
                payload: json.data
            })
        }
        catch(error) {
            console.log(error)
        }
    }
}

export function addProductToTheShoppingCart (product) {
    return {
        type: 'ADD_PRODUCT_TO_THE_SHOPPING-CART',
        payload: product
    }
}

export function removeProductOfTheShopingCart (id) {
    return {
        type: 'REMOVE_PRODUCT_OF_THE_SHOPPING-CART',
        payload: id
    }
}