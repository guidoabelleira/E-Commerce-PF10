import axios from 'axios';
import { PRODUCTS_URL, CATEGORIES_URL, PRODUCTS_BY_NAME_URL, CATEGORIES_FILTER_URL } from '../constantes';
import verify from '../components/Hooks/shopCart'

export function removeShopCart(products){
   return async function (dispatch) {
    dispatch ({
        type: "REMOVE_PCART",
        payload: products
    })
   }
   
}

export function addPCart(product, state){
             return async function(dispatch) {
            dispatch({
                type: "ADD_PCART",
                payload: verify(product, state)
            })
        }
 
}
//Guido
export function getAllProducts() {
    return async function(dispatch) {
        const all = await axios.get(PRODUCTS_URL);
       
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
            alert("no encontrado")
        }
    }
}

export function getProductByName(input) {
    return async function(dispatch) {
        try {
            let json = await axios.get(PRODUCTS_BY_NAME_URL + input)
            dispatch ({
                type: 'GET_RECIPE_BY_NAME',
                payload: json.data
            })
        }
        catch(error) {
            console.log(error)
        }
    }
}

export function getCategories() {
    return async function(dispatch) {
        let json = await axios.get(CATEGORIES_URL)
        return dispatch({
            type: 'GET_CATEGORIES',
            payload: json.data,
        })
    }
}

export function postProduct(payload) {
    return async function(dispatch) {
        try {
            let json = await axios.post(PRODUCTS_URL, payload)
            return json;
        }
        catch(error) {
            console.log(error)
        }
    }
}

export function getCategoryFiltered(payload) {
    return async function(dispatch) {
        let json = await axios.get(CATEGORIES_FILTER_URL + payload)
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
    return async function(dispatch) {
        let json = await axios.get(PRODUCTS_URL)
        json = json.data
        let jsonFinal = await axios.get(PRODUCTS_URL)
        jsonFinal = jsonFinal.data
        dispatch({
            type: 'SET_ASC_DESC',
            payload: sort(jsonFinal, json, orden, option)
        })
    }
}

export function getAllCategories () {
    return async function (dispatch) {
        try {
            let json = await axios.get(CATEGORIES_URL)
            dispatch ({
                type: 'GET_ALL_CATEGORIES',
                payload: json.data
            })
        }
        catch(error) {
            dispatch ({
                type: 'GET_ALL_CATEGORIES',
                payload: {error: "ERROR on GET_ALL_CATEGORIES"}
            })
        }
    }
}

export function putProduct (id) {
    return async () => {
        try {
            await axios.put('',{}) //No esta completa la ruta
            alert(`successful update of product id: ${id}`)
        }
        catch(error){
            console.log(error)
            alert(`Was failed the update of the product id: ${id}`)
        }
    }
}

export function postCategory(payload) {
    return async function(dispatch) {
        let json = await axios.post(CATEGORIES_URL , payload)
        return json
    }
}

export function deleteCategory(payload) {
    return async function(dispatch) {
            type: 'DELETE_CATEGORY',
            payload: json.data
        })
    }
}

export function getCategoryToDelete(category) {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/categories') 
        if(category){
            json = json.data.filter(el => el.name.toLowerCase().includes(category.toLowerCase()))
        } else {
            return dispatch({
                type: 'GET_CATEGORY_TO_DELETE',
                payload: "Item no encontrado"
            })
        }
        
        return dispatch({
            type: 'GET_CATEGORY_TO_DELETE',
            payload: json
        })
    }
}