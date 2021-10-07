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
//ver si el producto esta en elestado, si esta,solo sumarle +1, si no esta agregarlo, 
//pienso en usar un findone
export function addPCart(product, state ){
    let productos = [];
    
    if(state){
        
        let products = state.map(e=>{
          
            if(e.name === product.name){
                if(e.count){
                    e.count = e.count++
                    return e
                }else{
                    e.count = 1
                    return e
                }
                
                
            }else{
                 return e
            }
        })
        return async function(dispatch) {
            dispatch({
                type: "ADD_PCART",
                payload: products
            })
        }
    } else{
        
             return async function(dispatch) {
                product.count = 1;  
                productos.push(product);
            dispatch({
                type: "ADD_PCART",
                payload: productos
            })
        }
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

function sort(jsonFinal, json, orden, option) {
    if(orden.ord === "name") {
        if(option.asc === "asc") {
            json = json.sort((a, b) => a.name.localeCompare(b.name))
            return json
        } else if(option.asc === "desc") {
            json = json.sort((a, b) => a.name.localeCompare(b.name))
            return json.reverse()
        } else {
            return jsonFinal
        }
    }

    if(orden.ord === "price") {
        if(option.asc === "asc") {
            json = json.sort(function(a,b) {
                if(parseInt(a.price) > parseInt(b.price)) {
                    return -1
                }
                if(parseInt(b.price) > parseInt(a.price)) {
                    return 1
                }
                return 0
            })
            return json
        } else if(option.asc === "desc") {
            json = json.sort(function(a,b){
                if(parseInt(a.price) > parseInt(b.price)) {
                    return 1
                }
                if(parseInt(b.price) > parseInt(a.price)) {
                    return -1
                }
                return 0
            })
            return json
        } else {
            return jsonFinal
        }
    }
}

export function setAscDesc(orden, option) {
    console.log(orden, option)
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/products')
        json = json.data
        let jsonFinal = await axios.get('http://localhost:3001/products')
        jsonFinal = jsonFinal.data
        dispatch({
            type: 'SET_ASC_DESC',
            payload: sort(jsonFinal, json, orden, option)
        })
    }
}