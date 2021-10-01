
const initialState = {
    products: [],
    CreateNewProduct: {
        name: '',
        id: 0,
        price: 0.0,
        stock: 0,
        onStock: false,
        onSale: false,
        description: '',
        category: [],
    },
    SearchProductFromDb: {},
    shoppingCart: [],

}

function rootReducer(state = initialState, action) {
    switch(action.type) {

        case 'GET_PRODUCT_BY_ID':{
            return {
                ...state,
                SearchProductFromDb: action.payload
            }
        }

        case 'GET_PRODUCT_BY_NAME':{
            return {
                ...state,
                SearchProductFromDb: action.payload
            }
        }

        case 'ADD_PRODUCT_TO_THE_SHOPPING-CART':{
            return {
                ...state,
                shoppingCart: state.shoppingCart.push(action.payload)
            }
        }

        case 'REMOVE_PRODUCT_OF_THE_SHOPPING-CART':{
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter(products => products.id !== action.payload)
            }
        }

        default: {
            return state
        }
    }
}

export default rootReducer;