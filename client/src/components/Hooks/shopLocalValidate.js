export default function shopLocalValidate(newState){
    if(newState === undefined){
        localStorage.removeItem('shopCart')
        return [];
    } else {
        return newState;
    }
}