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
        default: {
            return state
        }
    }
}