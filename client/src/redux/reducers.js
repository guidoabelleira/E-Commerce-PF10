
const initialState = {
    products: [],
    productById: [],
    categories: [],
    shopProduct : [],
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            }
        case 'GET_PRODUCT_BY_ID':
            return {
                ...state,
                productById: action.payload
            }
        case "GET_RECIPE_BY_NAME" : 
            return {
                ...state,
                products: action.payload
            }
        case  'SET_ASC_DESC' :
            return {
                ...state,
                products: action.payload,
            }
        case 'GET_CATEGORIES' :
            return {
                ...state,
                categories: action.payload
            }
        case 'POST_PRODUCT' :
            return {
                ...state,
            }
        case "ADD_PCART":
        
            return {
                ...state,
                shopProduct :action.payload
                //[...state.shopProduct, action.payload]
        }
        case 'GET_CATEGORY_FILTERED' :
            return {
                ...state,
                products: action.payload
            }
        case "REMOVE_PCART" :
            return {
                ...state,
                shopProduct: action.payload
            }
        case "POST_CATEGORY": 
            return {
                ...state
            }   
        case "DELETE_CATEGORY" :
            return {
                ...state,
                categories: action.payload
            }
        default: {
            return state
        }
    }
}

export default rootReducer;