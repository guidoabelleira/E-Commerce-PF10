
const initialState = {
    user: {
        name: '',
        secondName: '',
        lastName: '',
        age: 0
    },
    product: {
        name: ''
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
        default: {
            return state
        }
    }
}

export default rootReducer;