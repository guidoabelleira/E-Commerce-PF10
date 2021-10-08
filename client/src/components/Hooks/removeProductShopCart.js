
const removeShopCart = (state, product) => {
if(state && product){
    let stateMap = state.map(e =>{
        if(e.id === product.id){
            if(e.count >  1){
                e.count = e.count - 1;
                return e;
            }if(e.count = 1) {
               e = undefined
            }
        } else {
            return e
        }
    })
    return stateMap;
} else {
    return state;
}
}

module.exports = removeShopCart