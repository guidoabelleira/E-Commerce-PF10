const initialState = {
    product: {},
    products: [],
    user: {},
    users: [],
    example: ''
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "EXAMPLE":{
            return {
                ...state,
                example: action.example
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