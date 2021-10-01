import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'

// const reducers = combineReducers({
//     reducer,
// })

const store = createStore(
    reducer,composeWithDevTools(
        applyMiddleware(thunk)
        )
    );

export default store;