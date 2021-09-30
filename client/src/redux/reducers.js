
const initialState = {
    products = [],
    product = {
        name: '',
        id: 0,
        image: '',
        price: 0.0,
        stock: 0,
        onStock: false,
        onSale: false,
        description: '',
        category: [],
    },
    texto: "soy una carta de cartas raras"
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "EXAMPLE":{
            return {
                ...state,
                texto: action.texto
            }
        }

        case "GET_RECIPE_BY_NAME" : 
        return {
            ...state,
            product: action.payload
        }

        default: {
            return state
        }
    }
}

export default rootReducer;