
const initialState = {
    products: [],
    productById: [],
    productsSales: [],
    productsLastests: [],
    productsPopular: [],
    shopProduct : [],
    totalCart: 0,
    allCategories: [],
    allOrders: [],
    allOrdersProcessing: [],
    allOrdersComplete: [],
    allOrdersCanceled: [],
    userOrderAll: [],
    userOrderProcessing: [],
    userOrderComplete: [],
    userOrderCanceled: [],
    orderById: [],
    user: [],
    userAll: [],
    userAllByMail: [],
    reviews: {},
    stock: []
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
        case 'GET_PRODUCT_BY_STOCK':
            return {
                ...state,
                stock: action.payload
            }
        case 'GET_SALES_PRODUCTS':
            return {
                ...state,
                productsSales: action.payload
            }
        case 'GET_LASTESTS_PRODUCTS':
            return {
                ...state,
                productsLastests : action.payload
            }
        case 'GET_POPULARS_PRODUCTS':
            return {
                ...state,
                productPopulars: action.payload
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
        case 'SET_CART_LOCAL_STORAGE':
            return {
                ...state,
                shopProduct: action.payload
            }
        case 'CLEAR_CART':
            return {
                ...state,
                shopProduct: action.payload
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
        case "TOTAL_CART":
            return {
                ...state,
                totalCart: action.payload
            }

        case 'GET_ALL_CATEGORIES':{
            return {
                ...state,
                allCategories: action.payload
            }
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
        case 'GET_CATEGORY_TO_DELETE':
            return {
                ...state,
                categories: action.payload
            }
        // ACTIONS ORDERS 
        case 'GET_ORDER_BY_ID':
            return {
                ...state,
                orderById: action.payload
            }
        case 'GET_ALL_ORDER_PROCESSING':
            return {
                ...state,
                allOrdersProcessing: action.payload
            }
        case 'GET_ALL_ORDER_COMPLETE':
            return {
                ...state,
                allOrdersComplete: action.payload
            }
        case 'GET_ALL_ORDER_CANCELED':
            return {
                ...state,
                allOrdersCanceled: action.payload
            }
        case 'GET_USER_ORDER_ALL':
            return {
                ...state,
                userOrderAll: action.payload
            }
        case 'GET_USER_ORDER_PROCESSING':
            return {
                ...state,
                userOrderProcessing: action.payload
            }
        case 'GET_USER_ORDER_COMPLETED':
            return {
                ...state,
                userOrderComplete: action.payload
        }
        case 'GET_USER_ORDER_CANCELED':
            return {
                ...state,
                userOrderCanceled: action.payload
            }
        // ACTIONS USER
        case 'GET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_USER_ALL':
            return {
                ...state,
                userAll: action.payload
            }
        case 'GET_USER_ALL_BY_MAIL':
            return {
                ...state,
                userAllByMail: action.payload
            }

        case 'GET_REVIEW_BY_ID': {
            return {
                ...state,
                reviews: action.payload
            }
        }
        
        default: {
            return state
        }
    }
}


export default rootReducer;