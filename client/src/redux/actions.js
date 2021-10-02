import axios from 'axios';
import { PRODUCTS_URL } from '../constantes';

//Guido
export function getAllProducts() {
    return async function(dispatch) {
        const all = await axios.get(PRODUCTS_URL);
        console.log(all)
            dispatch({
                type: 'GET_ALL_PRODUCTS',
                payload: all.data
            })   
    };
};

//Guido
export function getProductById(id){
    return async function(dispatch){
        try {
            const productById = await axios.get(PRODUCTS_URL + id)
            dispatch({
                type: 'GET_PRODUCT_BY_ID',
                payload: productById.data[0]
            })
        } catch (error){
            console.log(error)
        }
    }
}

export function getProductByName(input) {
    return async function(dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/products?name=' + input)
            dispatch ({
                type: 'GET_RECIPE_BY_NAME',
                payload: json.data
            })
        }
        catch(error) {
            dispatch ({
                type: 'GET_RECIPE_BY_NAME',
                payload: {error: "Product not found"}
            })
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