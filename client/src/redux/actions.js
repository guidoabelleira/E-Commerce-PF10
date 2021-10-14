import axios from 'axios';
import { 
    PRODUCTS_URL, 
    CATEGORIES_URL, 
    PRODUCTS_BY_NAME_URL, 
    CATEGORIES_FILTER_URL, 
    USER_LOAD, 
    //REVIEWS_URL, 
    REVIEWS_URL_GET,
} from '../constantes';
import verify from '../components/Hooks/shopCart'
import calculateTotalCart from '../components/Hooks/calculateTotalCart';
import shopLocalValidate from '../components/Hooks/shopLocalValidate';

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

export function setCartLocalStorage(state){
    return async function(dispatch){
        dispatch({
            type: 'SET_CART_LOCAL_STORAGE',
            payload: shopLocalValidate(state)
        })
    }
}

export function totalCart(state){
    return async function(dispatch){
        dispatch({
            type: "TOTAL_CART",
            payload: calculateTotalCart(state)
        })
    }
}
// ACTIONS PRODUCTS
export function getAllProducts() {
    return async function(dispatch) {
        const all = await axios.get(PRODUCTS_URL);
       
            dispatch({
                type: 'GET_ALL_PRODUCTS',
                payload: all.data
            })   
    };
};

export function getSalesProducts() {
    return async function(dispatch) {
        try{
            const res = await axios.get(PRODUCTS_URL + 'getHome/sales');
            const all = res.data.slice(0,3)
            dispatch({
                type: 'GET_SALES_PRODUCTS',
                payload: all
            })   

        } catch (error){
            console.log(error)
        }
        
    };
};

export function getLastestsProducts() {
    return async function(dispatch) {
        try {
            const res = await axios.get(PRODUCTS_URL + 'getHome/latests');
            const all = res.data.slice(0,3)
            dispatch({
                type: 'GET_LASTESTS_PRODUCTS',
                payload: all
            })   
        } catch (error) {
            console.log(error)
        }
    };
};

// export function getPopularsProducts() {
//     return async function(dispatch) {
//         const all = await axios.get(PRODUCTS_URL + '/getHome/populars');
       
//             dispatch({
//                 type: 'GET_POPULARS_PRODUCTS',
//                 payload: all.data
//             })   
//     };
// };

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
            if(json.data.data?.error){
                alert ('No se encontró el producto buscado')
            } else {
                return dispatch ({
                type: 'GET_RECIPE_BY_NAME',
                payload: json.data
                })
            }
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
                    return 1
                }
                if(parseInt(b.price) > parseInt(a.price)) {
                    return -1
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

export function putProduct (product) {
    return async () => {
        try {
            await axios.put(
                PRODUCTS_URL + product.id,
                product
            )
            alert(`successful update of product id: ${product.name}`)
        }
        catch(error){
            console.log(error)
            alert(`Was failed the update of the product id: ${product.name}`)
        }
    }
}

export function postCategory(payload) {
    return async function(dispatch) {
        let json = await axios.post(CATEGORIES_URL , payload)
        return json
    }
}

/* export function deleteCategory(payload) {
    return async function(dispatch) {
            type: 'DELETE_CATEGORY',
            payload: json.data
        }
} */

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


// ACTIONS ORDERS
// export function getOrdersAdmin(){
//     return async function(dispatch){
//         try {
//             const allOrders = await axios.get(ORDERS_URL)
//             dispatch({
//                 type: 'GET_ORDERS',
//                 payload: allOrders.data
//             })
//         } catch (error){
//             console.log(error)
//             alert("no encontrado")
//         }
//     }
// }

export function getUserOrderAll(idUser){
    return async function(dispatch){
        try {
            const orderAll = await axios.get(USER_LOAD + idUser + '/orders');
            dispatch({
                type: 'GET_USER_ORDER_ALL',
                payload: orderAll.data
            })
        } catch (error){
            console.log(error)
            alert("no encontrado")
        }
    }
}

export function getUserOrderProcessing(idUser){
    return async function(dispatch){
        try {
            const orderProcessing = await axios.get(USER_LOAD + idUser + '/orders?state=Processing');
            dispatch({
                type: 'GET_USER_ORDER_PROCESSING',
                payload: orderProcessing.data
            })
        } catch (error){
            console.log(error)
            alert("no encontrado")
        }
    }
}
export function getUserOrderCompleted(idUser){
    return async function(dispatch){
        try {
            const orderCompleted = await axios.get(USER_LOAD + idUser + '/orders?state=Completed')
            dispatch({
                type: 'GET_USER_ORDER_COMPLETED',
                payload: orderCompleted.data
            })
        } catch (error){
            console.log(error)
            alert("no encontrado")
        }
    }
}
export function getUserOrderCanceled(idUser){
    return async function(dispatch){
        try {
            const orderCanceled = await axios.get(USER_LOAD + idUser + '/orders?state=Canceled')
            dispatch({
                type: 'GET_USER_ORDER_CANCELED',
                payload: orderCanceled.data
            })
        } catch (error){
            console.log(error)
            alert("no encontrado")
        }
    }
}

// ACTIONS USER_ROLE
export function getUser (idUser){
    return async function(dispatch){
        try {
            const user = await axios.get(USER_LOAD + 'oneUser/' + idUser)
            dispatch({
                type: 'GET_USER',
                payload: user.data
            })

        } catch (error){
            console.log(error)

        }
    }
}

export function getReviewById(idProduct){
    return async function(dispatch){
        try {
            //const reviews = await axios.get(REVIEWS_URL_GET + idProduct + '/reviews')
            const reviews = await axios.get(REVIEWS_URL_GET + idProduct + '/reviews')
            dispatch({
                type: 'GET_REVIEW_BY_ID',
                payload: reviews.data
            })
        } catch (error){
            console.log(error)
            alert("no encontrado")
        }
    }
}
