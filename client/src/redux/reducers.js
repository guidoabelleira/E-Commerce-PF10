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
                    if(a.price > b.price) {
                        return 1
                    }
                    if(b.price > a.price) {
                        return -1
                    }
                    return 0
                }) :
                state.products.sort(function(a,b) {
                    if(a.price > b.price) {
                        return -1
                    }
                    if(b.price > a.price) {
                        return 1
                    }
                    return 0
                })
                return {
                    ...state,
                    products: sortedPrice
                }

        default: {
            return state
        }
    }
}