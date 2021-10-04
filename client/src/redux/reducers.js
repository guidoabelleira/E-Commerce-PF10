
const initialState = {
    products: [],
    productById: [],
    categories: [],
    shopProduct : [],
    // product = {
    //     name: '',
    //     id: 0,
    //     image: '',
    //     price: 0.0,
    //     stock: 0,
    //     onStock: false,
    //     onSale: false,
    //     description: '',
    //     category: [],
    // },
    texto: "soy una carta de cartas raras"
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload
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

        case "ORDER_ASC_DESC" :
            const sortedArr = action.payload === 'asc' ? 
            state.products.sort(function(a,b) {
                if(a.name > b.name) {
                    return 1 
                }
                if(b.name > a.name) {
                    return -1
                }
                return 0
            }) :
            state.products.sort(function(a,b) {
                if(a.name > b.name) {
                    return -1
                }
                if(b.name > a.name) {
                    return 1
                }
                return 0
            })
            return {
                ...state,
                products: sortedArr
            }

            case 'ORDER_BY_PRICE' :
                let sortedPrice = action.payload === 'lowest' ? 
                state.products.sort(function(a,b){
                    if(parseInt(a.price) > parseInt(b.price)) {
                        return 1
                    }
                    if(parseInt(b.price) > parseInt(a.price)) {
                        return -1
                    }
                    return 0
                }) :
                state.products.sort(function(a,b) {
                    if(parseInt(a.price) > parseInt(b.price)) {
                        return -1
                    }
                    if(parseInt(b.price) > parseInt(a.price)) {
                        return 1
                    }
                    return 0
                })
                return {
                    ...state,
                    products: sortedPrice
                }
            
            case 'GET_CATEGORIES' :
                return {
                    categories: action.payload
                }

            case 'POST_PRODUCT' :
                return {
                    ...state,
                }
            case "ADD_PCART":
            return {
                ...state,
                shopProduct :[...state.shopProduct, action.payload]
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

        default: {
            return state
        }
    }
}

export default rootReducer;