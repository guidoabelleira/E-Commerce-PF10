import axios from 'axios';
import { PRODUCTS_URL } from '../constantes';

export function removeShopCart(products){
   return async function (dispatch) {
    dispatch ({
        type: "REMOVE_PCART",
        payload: products
    })
   }
   
}

export function addPCart(product){
    return async function(dispatch) {
    dispatch({
        type: "ADD_PCART",
        payload: product
    })
}
}
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

export function getCategories() {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/categories')
        return dispatch({
            type: 'GET_CATEGORIES',
            payload: json.data,
        })
    }
}

export function postProduct(payload) {
    return async function(dispatch) {
        let json = await axios.post('http://localhost:3001/products', payload)
        return json;
    }
}

export function getCategoryFiltered(payload) {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/products/category/'+ payload)
        return dispatch({
            type: 'GET_CATEGORY_FILTERED',
            payload: json.data
        })
    }
}