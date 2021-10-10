export default function calculateTotalCart(state){
    let total = 0;
    if(state){
        state.map(e => {
            let subTotal = Number(e.price) * Number(e.count);
            return total += subTotal;
        })
    }
    return total;
}

