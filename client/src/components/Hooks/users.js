import axios from "axios";
import { USER_LOAD } from "../../constantes";

export async function authenticatedUserDb(user){
    console.log("console hook user: ", user)
    console.log("console hook user name: ", user.name)
    if(user){
        const values = {
            name: user.given_name,
            lastname: user.family_name,
            email: user.email,
            address: user.locale,
            userRole: 'client',
            isAdmin: false,
            password: user.nickname,
            image: user.picture
        }
        // envio a crear el usuario
        async function validate(values) {
            let response = await axios.post(USER_LOAD, values);
            const r = response.data
            console.log("response: ", r);
            return r.id
        }
        const id = await validate(values);
        localStorage.setItem('idUser', id)
        return id;
    }
}

export function isAdmin(address) {
    //consulto por address si es admin y devuelvo un boolean
    if(address === 'guidoabelleira@gmail.com'){
        return true;
    }
    return false;
}